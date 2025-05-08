<script setup>
import { ref, onMounted, computed, reactive, watch } from 'vue'
import { supabase } from '@/utils/supabase';
import { useRouter } from 'vue-router';


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
const profileComplete = ref(false)
const router = useRouter()

// Profile fields
const profileFields = reactive({
  first_name: '',
  last_name: '',
  middle_name: '',
  year_level: '',
  id_number: ''
})

//fetch students details
watch(student, (newStudent) => {
  if (newStudent) {
    profileFields.first_name = newStudent.first_name || '';
    profileFields.last_name = newStudent.last_name || '';
    profileFields.middle_name = newStudent.middle_name || '';
    profileFields.year_level = newStudent.year_level || '';
    profileFields.id_number = newStudent.id_number || '';


    // Update profile complete status
    profileComplete.value = Boolean(
      newStudent.first_name &&
      newStudent.last_name &&
      newStudent.year_level &&
      newStudent.id_number
      )
    
  }
}, { immediate: true });

//  dashboard data
const fetchDepartmentData = async () => {
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
      // If no student profile exists, create one
      const { data: newStudent, error: createError } = await supabase
        .from('students')
        .insert([{ 
          users_id: authUser.id,
          department_id: null,
          first_name: null,
          last_name: null,
          middle_name: null,
          year_level: null,
          id_number: null,
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

    if (studentData.department_id === 2) {
    router.push({ name: 'CS_Dashboard' });
    return;
    }

    if (studentData.department_id === 6) {
    router.push({ name: 'IT_Dashboard' });
    return;
    }

    // if (studentData.department_id === 7) {
    // router.push({ name: 'IS_Dashboard' });
    // return;
    // }
    
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
      .select('id, depatment_name, program, college, effectivity, basis')
      .eq('id', departmentId)
      .single();

    if (deptError) throw deptError;
    department.value = departmentData;

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


const editingProgramDetails = ref(false);
const programDetails = reactive({
  program: '',
  depatment_name: '',
  college: '',
  effectivity: '',
  basis: ''
});

// fecth from table departments
watch(department, (newDept) => {
  if (newDept?.id) {
    programDetails.program = newDept.program || '';
    programDetails.college = newDept.college || '';
    programDetails.effectivity = newDept.effectivity || '';
    programDetails.basis = newDept.basis || '';
  }
}, { immediate: true });

const saveProgramDetails = async () => {
  try {
    loading.value = true;
    if (!department.value?.id) {
      throw new Error('No department selected');
    }

    const { error } = await supabase
      .from('departments')
      .update({
        program: programDetails.program,
        college: programDetails.college,
        effectivity: programDetails.effectivity,
        basis: programDetails.basis
      })
      .eq('id', department.value.id);

    if (error) throw error;

    const { data: updatedDept } = await supabase
      .from('departments')
      .select('*')
      .eq('id', department.value.id)
      .single();
      
    department.value = updatedDept;
    editingProgramDetails.value = false;

  } catch (err) {
    error.value = 'Failed to save program details: ' + err.message;
  } finally {
    loading.value = false;
  }
};

// Update student's department
const updateDepartment = async () => {
  if (!selectedDepartment.value) return;
  
  try {
    loading.value = true;
    const { error: updateError } = await supabase
      .from('students')
      .update({ department_id: selectedDepartment.value })
      .eq('users_id', user.value.id);

    if (updateError) throw updateError;

    await fetchDepartmentAndCourses(selectedDepartment.value);
    
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

// Update or create student profile
const saveStudentProfile = async () => {
  try {
    loading.value = true;

    if (!student.value?.id) {
      throw new Error('Student profile not found');
    }

    // Update student profile with profileFields data
    const { error } = await supabase
      .from('students')
      .update({
        first_name: profileFields.first_name,
        last_name: profileFields.last_name,
        middle_name: profileFields.middle_name,
        year_level: profileFields.year_level,
        id_number: profileFields.id_number
      })
      .eq('id', student.value.id);

    if (error) throw error;

    // Refresh student data
    const { data: updatedStudent } = await supabase
      .from('students')
      .select('*')
      .eq('id', student.value.id)
      .single();

      student.value = updatedStudent;

    const deptId = updatedStudent.department_id;
    if (deptId === 2) {
      router.push('/dashboard');
    } else if (deptId === 6) {
      router.push('/dashboard/IT');
    } else if (deptId === 7) {
      router.push('/dashboard/IS');
    } else {
      router.push('/');
    }

  } catch (err) {
    error.value = err.message || 'Failed to update profile';
    console.error('Profile update error:', err);
  } finally {
    loading.value = false;
  }
};


onMounted(() => {
  fetchDepartmentData()
});
</script>

<template>
    <div class="department-dashboard">
     
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="error" class="error">{{ error }}</div>
  
    
      <div v-if="student" class="department-content">
        ?
        <div class="header">
          <h1>PROGRAM CURRICULUM</h1>
          <div class="program-info">
            <div class="program-details">
              <p><strong>Program:</strong> {{ department?.program || 'Undeclared' }}</p>
              <p><strong>Department:</strong> {{ department?.depatment_name || 'Undeclared' }}</p>
              <p><strong>College:</strong> {{ department?.college || 'Undeclared' }}</p>
            </div>
            <div class="revision-info">
              <p><strong>Date of Revision:</strong> Rev 2, {{ department?.revision_date || '11-08-2019' }}</p>
              <p><strong>Effectivity:</strong> AY {{ department?.effectivity || 'Undeclared' }}</p>
              <p><strong>Basis:</strong> CMO 25, s. {{ department?.basis || 'Undeclared' }}</p>
            </div>
          </div>
        </div>
  
        <!-- Department Selection (only shown if no department selected) -->
        <div v-if="!department?.id" class="department-selection-section">
          <h3>Select Your Department</h3>
          <select v-model="selectedDepartment" class="department-select">
            <option value="" disabled selected>Select a department</option>
            <option 
              v-for="dept in departments" 
              :key="dept.id" 
              :value="dept.id"
            >
              {{ dept.depatment_name }}
            </option>
          </select>
          <br>
          <v-btn 
            @click="updateDepartment"
            :disabled="!selectedDepartment"
            class="confirm-button"
          >
            Confirm Department
        </v-btn>
        </div>
  
      
        <!-- Profile Creation/Update Section -->
        <div v-if="!student.first_name || !student.last_name || !student.year_level || !student.id_number" class="profile-update-section">
    <h3 class="text-center">Complete Your Profile</h3>
    <v-sheet class="mx-auto" width="600"> 
        <v-form @submit.prevent="saveStudentProfile" class="profile-form">
            <v-row>
                <v-col cols="6">
                    <v-text-field v-model="profileFields.first_name" placeholder="First Name" required></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="profileFields.last_name" placeholder="Last Name" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-text-field v-model="profileFields.middle_name" placeholder="Middle Name"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="profileFields.year_level" placeholder="Year Level" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="profileFields.id_number" placeholder="ID Number" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-btn variant="outlined" type="submit" class="submit-button">Update Profile</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-sheet>
</div>

            <!-- Profile Display Section -->
            <div v-else class="profile-display">
            <h3>Your Profile</h3>
            <div class="profile-details">
                <p><strong>Name:</strong> {{ student.first_name }} {{ student.middle_name }} {{ student.last_name }}</p>
                <p><strong>ID Number:</strong> {{ student.id_number }}</p>
                <p><strong>Year Level:</strong> {{ student.year_level }}</p>
            </div>
            </div>

      </div>
    </div>
  </template>
  <style src="./AddDepartment.css"></style>

  