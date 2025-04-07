<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref(null);

const handleLogin = async () => {
  loading.value = true;
  error.value = null;

  // Simulate login success (for testing without Supabase)
  if (email.value === 'test@example.com' && password.value === 'password') {
    router.push('/dashboard'); // Simulate successful login
  } else {
    error.value = 'Invalid email or password';
  }

  loading.value = false;
};
</script>

<template>
  <v-container fluid class="fill-height d-flex flex-column align-center justify-center pa-4">
    <!-- Title placed outside the card -->
    <div class="text-center mb-4">
      <h2 class="text-h4 font-weight-bold">Log In</h2>
    </div>

    <v-card class="pa-6" max-width="500" width="100%" elevation="10">
      <v-card-text>
        <!-- Logo placed inside the card -->
        <div class="text-center mb-4">
          <img src="@/assets/LogoCourse.png" alt="Logo" style="height: 140px; max-width: 100%;" />
          <h3 class="mt-2 text-subtitle-1 font-weight-medium">Course Tracker Management System (CSU)</h3>
        </div>
        <v-form @submit.prevent="handleLogin">
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
        </v-form>
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
