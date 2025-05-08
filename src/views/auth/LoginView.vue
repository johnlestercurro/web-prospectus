<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/utils/supabase'; // diri naka store ang connection sa supabase  

const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref(null);

const handleLogin = async (e) => {
  e.preventDefault(); // for form submission
  loading.value = true;
  error.value = null;

  try {
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });

    if (authError) throw authError;
    router.push('/dashboard');
  } catch (err) {
    error.value = err.message || 'Invalid email or password';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <v-container fluid class="fill-height d-flex flex-column align-center justify-center pa-4">
    <div class="text-center mb-4">
      <h2 class="text-h4 font-weight-bold">Log In</h2>
    </div>
    <v-card class="pa-6" max-width="500" width="100%" elevation="10">
      <v-card-text>
        <div class="text-center mb-4">
          <img src="@/assets/LogoCourse.png" alt="Logo" style="height: 140px; max-width: 100%;" />
          <h3 class="mt-2 text-subtitle-1 font-weight-medium">Course Tracker Management System (CSU)</h3>
        </div>
        <form @submit="handleLogin">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
            outlined
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            outlined
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
          <v-btn type="submit" color="primary" block class="mt-4" :loading="loading">
            Log In
          </v-btn>
        </form>
        <v-alert v-if="error" type="error" dense class="mt-3">{{ error }}</v-alert>
        <div class="text-center mt-3">
          <small>
            Don't have an account?
            <router-link to="/signup">Sign Up</router-link>
          </small>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-card {
  border-radius: 16px;
}
</style>