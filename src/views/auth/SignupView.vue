<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const error = ref(null);

const handleSignUp = async () => {
  loading.value = true;
  error.value = null;

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    loading.value = false;
    return;
  }

  // Simulate successful sign-up (for testing without Supabase)
  if (email.value && password.value) {
    router.push('/login'); // Redirect to login after successful sign-up
  } else {
    error.value = 'Sign up failed. Please fill all required fields.';
  }

  loading.value = false;
};
</script>

<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-6" width="400" elevation="10">
      <v-card-title class="text-center text-h5 font-weight-bold">Sign Up</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleSignUp">
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
          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            required
            outlined
            prepend-inner-icon="mdi-lock-check"
          ></v-text-field>
          <v-btn type="submit" color="primary" block class="mt-4" :loading="loading">
            Sign Up
          </v-btn>
        </v-form>
        <v-alert v-if="error" type="error" dense class="mt-3">{{ error }}</v-alert>
        <div class="text-center mt-3">
          <small>
            Already have an account?
            <router-link to="/login">Log In</router-link>
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
