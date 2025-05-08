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
              v-model="item.course_grade"
              @change="updateGrade(item)"
              type="number"
              class="grade-input"
              hide-details
              single-line
              max="99"
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
        userId: null
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
            course_grade: matched ? matched.grade : null
          };
        });
      },
      filteredCourses() {
        const courses = this.formattedCourses;
  
        if (this.selectedStatus === 'All') return courses;
  
        return courses.filter(course => {
          const grade = parseFloat(course.course_grade);
          if (isNaN(grade)) return false;
  
          if (this.selectedStatus === 'Passed') return grade >= 1 && grade <= 3;
          if (this.selectedStatus === 'Failed') return grade >= 4 && grade <= 5;
          if (this.selectedStatus === 'Dropped') return grade >= 6;
  
          return false;
        });
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
  
        const { error } = await supabase.from('student_grades').upsert({
          user_id: this.userId,
          course_code: course.code,
          grade: course.course_grade
        }, { onConflict: ['user_id', 'course_code'] });
  
        if (!error) {
          this.fetchGrades();
        } else {
          console.error('Error updating grade:', error);
        }
      }
    },
    async mounted() {
      await this.fetchUser();
    }
  };
  </script>
