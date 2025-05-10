<script setup>
import { ref, onMounted, reactive, watch } from 'vue'
import { supabase } from '@/utils/supabase';
import './Dashboard.css'
import CurriculumTable from '@/components/table/CurriculumTable.vue';
import { firstSemCourses, secondSemCourses, secondYearFirstSem, secondYearSecondSem, thirdYearFirstSem, thirdYearSecondSem, fourthYearFirstSem, fourthYearSecondSem } from '../courses/cs_addcourse.js'

// Data refs
const user = ref(null) 
const student = ref(null)
const department = ref(null)
const courses = ref([])
const departments = ref([])
const enrollments = ref([])
const progress = ref([])
const loading = ref(true)
const error = ref(null)
const selectedDepartment = ref(null)
const selectedStatus = ref('All');
const sidebarVisible = ref(false);

// Fetch all dashboard data
const fetchCSDashboard = async () => {
  try {
    loading.value = true;
    error.value = null;

    // 1. Get authenticated user
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;
    if (!authUser) throw new Error("Not logged in");
    user.value = authUser;

    // 2. Get or create student profile
    let studentData;
    const { data: existingStudent } = await supabase
      .from('students')
      .select('*')
      .eq('users_id', authUser.id)
      .maybeSingle();

    if (!existingStudent) {
      const { data: newStudent, error: createError } = await supabase
        .from('students')
        .insert([{ 
          users_id: authUser.id,
          department_id: null,
        }])
        .select()
        .single();
      if (createError) throw createError;
      studentData = newStudent;
    } else {
      studentData = existingStudent;
    }

    student.value = studentData;
    selectedDepartment.value = studentData.department_id;

    // 3. Fetch all departments for selection
    const { data: allDepts, error: deptsError } = await supabase
      .from('departments')
      .select('id, depatment_name');
      
    if (deptsError) throw deptsError;
    departments.value = allDepts || [];

    // 4. Fetch current department if exists
    if (studentData.department_id) {
      await fetchDepartmentAndCourses(studentData.department_id);
    }

  } catch (err) {
    error.value = err.message || 'Unknown error';
    console.error('Dashboard error:', err);
  } finally {
    loading.value = false;
  }
};

// Fetch department and its courses
const fetchDepartmentAndCourses = async (departmentId) => {
  try {
    const { data: departmentData, error: deptError } = await supabase
      .from('departments')
      .select('id, depatment_name, program, date_of_revision, college, effectivity, basis')
      .eq('id', departmentId)
      .single();

    if (deptError) throw deptError;
    department.value = departmentData;

    // fetch courses for this department
    const { data: coursesData, error: coursesError } = await supabase
      .from('courses')
      .select('*')
      .eq('department_id', departmentId);

    if (coursesError) throw coursesError;
    courses.value = coursesData || [];

  } catch (err) {
    console.error('Error fetching department/courses:', err);
    throw err;
  }
};

// Top section for program curriculum
const editingProgramDetails = ref(false);
const programDetails = reactive({
  program: '',
  depatment_name: '',
  college: '',
  effectivity: '',
  basis: '',
  date_of_revision: ''  
});

// Load existing details when department is set
watch(department, (newDept) => {
  if (newDept?.id) {
    programDetails.program = newDept.program || '';
    programDetails.college = newDept.college || '';
    programDetails.effectivity = newDept.effectivity || '';
    programDetails.basis = newDept.basis || '';
    programDetails.date_of_revision = newDept.date_of_revision || '';
  }
}, { immediate: true });

const cancelEdit = () => {
  editingProgramDetails.value = false;
  
  if (department.value?.id) {
    programDetails.program = department.value.program || '';
    programDetails.college = department.value.college || '';
    programDetails.effectivity = department.value.effectivity || '';
    programDetails.basis = department.value.basis || '';
    programDetails.date_of_revision = department.value.date_of_revision || '';
  }
};

// Update student's department
const updateDepartment = async () => {
  if (!selectedDepartment.value) return;
  
  try {
    loading.value = true;

    // Update student record
    const { error: updateError } = await supabase
      .from('students')
      .update({ department_id: selectedDepartment.value })
      .eq('users_id', user.value.id);

    if (updateError) throw updateError;

    // Refresh department and courses
    await fetchDepartmentAndCourses(selectedDepartment.value);

    // Update student data
    const { data: updatedStudent } = await supabase
      .from('students')
      .select('*')
      .eq('users_id', user.value.id)
      .single();

    student.value = updatedStudent;

  } catch (err) {
    error.value = err.message || 'Failed to update department';
    console.error('Update error:', err);
  } finally {
    loading.value = false;
  }
};

const handleGradeUpdate = ({ courseCode, grade }) => {
  const allSemesters = [
    firstSemCourses,
    secondSemCourses,
    secondYearFirstSem,
    secondYearSecondSem,
    thirdYearFirstSem,
    thirdYearSecondSem,
    fourthYearFirstSem,
    fourthYearSecondSem
  ];

  for (const semester of allSemesters) {
    const course = semester.value.find(c => c.code === courseCode);
    if (course) {
      course.course_grade = grade;
      break;
    }
  }
};

const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    window.location.href = '/'; 
  } catch (err) {
    console.error('Logout error:', err.message);
  }
};

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
};


// onMounted hook to fetch the dashboard data
onMounted(() => {
  fetchCSDashboard();
});

</script>


<template>
    <div class="dashboard">
      <!-- Loading Overlay -->
      <div v-if="loading" class="overlay loading-overlay">
        <div class="overlay-content">
          <v-progress-circular indeterminate color="success" size="70"></v-progress-circular>
          <div class="loading-text">Fetching data...</div>
        </div>
      </div>
  
      <!-- Error Overlay -->
      <div v-if="error" class="overlay error-overlay">
        <div class="overlay-content">
          <v-icon color="error" size="64">mdi-alert-circle-outline</v-icon>
          <div class="error-text">{{ error }}</div>
          <v-btn color="primary" @click="error = null" class="mt-4">Dismiss</v-btn>
        </div>
      </div>
  
      <!-- Main Content (blurred when overlay active) -->
      <div :class="{'blur-content': loading || error}">
        <div v-if="student" class="dashboard-content">
          <!-- Left Sidebar -->
                  <div class="profile-sidebar">
            <button class="hamburger" @click="toggleSidebar">
              ☰
            </button>

            <div class="profile-card" :class="{ show: sidebarVisible }">
              <div class="profile-header">
                <h4>My Profile</h4>
              </div>
              <div class="profile-body">
                <div class="avatar">
                  {{ student.first_name?.charAt(0) }}{{ student.last_name?.charAt(0) }}
                </div>
                <br>
                <div class="profile-info">
                  <p><strong>Name:</strong> {{ student.first_name }} {{ student.middle_name }} {{ student.last_name }}</p>
                  <p><strong>ID Number:</strong> {{student.id_number}}</p>
                  <p><strong>Year Level:</strong> {{ student.year_level }}</p>
                  <p><strong>Program:</strong> {{ department?.program || 'Undeclared' }}</p>
                  <p><strong>Department:</strong> {{ department?.depatment_name || 'Undeclared' }}</p>
                </div>
              </div>
              <div class="logout-section">
                <button class="logout-button" @click="logout">Logout</button>
              </div>
            </div>
          </div>
          
          <!-- Main Content -->
          <div class="main-content-container">
            <div class="main-content">
              <!-- Header Section -->
              <div class="header">
                <h1>PROGRAM CURRICULUM</h1>
                <div class="program-info">
                  <div class="program-details">
                    <p><strong>Program:</strong> {{ department?.program || 'Undeclared' }}</p>
                    <p><strong>Department:</strong> {{ department?.depatment_name || 'Undeclared' }} Department</p>
                    <p><strong>College:</strong> {{ department?.college || 'Undeclared' }}</p>
                  </div>
                  <div class="revision-info">
                    <p><strong>Date of Revision:</strong> Rev 2, {{ department?.date_of_revision || '11-08-2019' }}</p>
                    <p><strong>Effectivity:</strong> AY {{ department?.effectivity || 'Undeclared' }}</p>
                    <p><strong>Basis:</strong> CMO 25, series {{ department?.basis || 'Undeclared' }}</p>
                  </div>
                </div>
              </div>
  
              <v-select
                v-model="selectedStatus"
                :items="['All', 'Passed', 'Failed', 'Dropped', 'INC']"
                label="Filter by Status"
                outlined
                dense
                style="max-width: 200px; margin-bottom: 16px"
              />
  
              <!-- Curriculum Tables -->
              <CurriculumTable
                :semesterTitle="'FIRST YEAR (First Semester)'"
                :courses="firstSemCourses"
                :selected-status="selectedStatus"
                @grade-updated="handleGradeUpdate"
                />

            <CurriculumTable
                :semesterTitle="'FIRST YEAR (Second Semester)'"
                :courses="secondSemCourses"
                :selected-status="selectedStatus"
                @grade-updated="handleGradeUpdate"
                />

            <CurriculumTable
                :semesterTitle="'SECOND YEAR (First Semester)'"
                :courses="secondYearFirstSem"
                :selected-status="selectedStatus"
                @grade-updated="handleGradeUpdate"
                />
              
             <CurriculumTable
                :semesterTitle="'SECOND YEAR (Second Semester)'"
                :courses="secondYearSecondSem"
                :selected-status="selectedStatus"
                @grade-updated="handleGradeUpdate"
                />
            
            <CurriculumTable
                :semesterTitle="'THIRD YEAR (First Semester)'"
                :courses="thirdYearFirstSem"
                :selected-status="selectedStatus"
                @grade-updated="handleGradeUpdate"
                />
            
            <CurriculumTable
                :semesterTitle="'THIRD YEAR (Second Semester)'"
                :courses="thirdYearSecondSem"
                :selected-status="selectedStatus"
                @grade-updated="handleGradeUpdate"
                />
            
            <CurriculumTable
                :semesterTitle="'FOURTH YEAR (First Semester)'"
                :courses="fourthYearFirstSem"
                :selected-status="selectedStatus"
                @grade-updated="handleGradeUpdate"
                />
            
            <CurriculumTable
                :semesterTitle="'FOURTH YEAR (Second Semester)'"
                :courses="fourthYearSecondSem"
                :selected-status="selectedStatus"
                @grade-updated="handleGradeUpdate"
                />
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>


