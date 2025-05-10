<template>
  <div class="curriculum-section">
    <h2>{{ semesterTitle }}</h2>

    <!-- display a message for no-results -->
    <div v-if="filteredCourses.length === 0" class="no-results">
      No courses match the selected filter.
    </div>

    <v-data-table
      v-else
      :headers="headers"
      :items="filteredCourses"
      class="elevation-1"
      dense
      hide-default-footer
    >
      <template v-slot:item.course_grade="{ item }">
        <div style="display: flex; justify-content: center; align-items: center;">
          <v-text-field
            v-model="courseGradeInput[item.code]"
            @change="handleGradeInput(item)"
            type="text"
            class="grade-input"
            hide-details
            single-line
            style="width: 60px"
          />
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { supabase } from '@/utils/supabase';
import "./Curriculum.css";

export default {
  props: {
    semesterTitle: String,
    courses: Array,
    selectedStatus: String
  },
  data() {
    return {
      grades: [],
      userId: null,
      courseGradeInput: {} // stores editable values
    };
  },
  computed: {
    headers() {
      return [
        { title: 'Grade', key: 'course_grade' },
        { title: 'COURSE CODE', key: 'code' },
        { title: 'DESCRIPTIVE TITLE', key: 'title' },
        { title: 'Units (Total)', key: 'contact_total' },
        { title: 'Units (Lec)', key: 'contact_lec' },
        { title: 'Units (Lab)', key: 'contact_lab' },
        { title: 'Contact Hrs. (Total)', key: 'total_total' },
        { title: 'Contact Hrs. (Lec)', key: 'total_lec' },
        { title: 'Contact Hrs. (Lab)', key: 'total_lab' },
        { title: 'Pre-requisite(s)', key: 'pre_requisite' },
        { title: 'Co-requisite(s)', key: 'co_requisite' }
      ];
    },
    formattedCourses() {
      return this.courses.map(course => {
        const matched = this.grades.find(g => g.course_code === course.code);
        return {
          ...course,
          contact_total: course.contact.total,
          contact_lec: course.contact.lec,
          contact_lab: course.contact.lab,
          total_total: course.total.total,
          total_lec: course.total.lec,
          total_lab: course.total.lab,
          course_grade: matched ? (matched.grade === 999 ? 'INC' : matched.grade) : null
        };
      });
    },
    filteredCourses() {
      const courses = this.formattedCourses;

      if (this.selectedStatus === 'All') return courses;

      return courses.filter(course => {
        const grade = course.course_grade;
        if (grade === 'INC') return this.selectedStatus === 'INC';

        const parsedGrade = parseFloat(grade);
        if (isNaN(parsedGrade)) return false;

        if (this.selectedStatus === 'Passed') return parsedGrade >= 1 && parsedGrade <= 3;
        if (this.selectedStatus === 'Failed') return parsedGrade >= 4 && parsedGrade <= 5;
        if (this.selectedStatus === 'Dropped') return parsedGrade >= 6;

        return false;
      });
    }
  },
  watch: {
    grades: {
      handler() {
        this.courseGradeInput = {};
        this.formattedCourses.forEach(course => {
          this.courseGradeInput[course.code] = course.course_grade;
        });
      },
      immediate: true
    }
  },
  methods: {
    async fetchUser() {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      this.userId = user?.id;
      if (this.userId) {
        this.fetchGrades();
      }
    },
    async fetchGrades() {
      const { data, error } = await supabase
        .from('student_grades')
        .select('*')
        .eq('user_id', this.userId);

      if (!error) {
        this.grades = data;
      } else {
        console.error('Error fetching grades:', error);
      }
    },
    async updateGrade(course) {
      if (!this.userId) return;

      let value = course.course_grade;
      if (value === 'INC') {
        value = 999;
      } else {
        value = parseFloat(value);
        if (isNaN(value)) return;
      }

      const { error } = await supabase.from('student_grades').upsert({
        user_id: this.userId,
        course_code: course.code,
        grade: value
      }, { onConflict: ['user_id', 'course_code'] });

      if (!error) {
        this.fetchGrades();
      } else {
        console.error('Error updating grade:', error);
      }
    },
    handleGradeInput(item) {
      const input = this.courseGradeInput[item.code];

      if (typeof input === 'string' && input.trim().toUpperCase() === 'INC') {
        item.course_grade = 'INC';
      } else {
        const parsed = parseFloat(input);
        item.course_grade = isNaN(parsed) ? null : parsed;
      }

      this.updateGrade(item);
    }

  },
  async mounted() {
    await this.fetchUser();
  }
};
</script>
