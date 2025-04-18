<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/utils/supabase'; // diri naka store ang connection sa supabase  

const router = useRouter();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const error = ref(null);

const handleSignUp = async () => {
  loading.value = true;
  error.value = null;

  // validation
  if (!email.value || !password.value || !confirmPassword.value) {
    error.value = 'Please fill all required fields';
    loading.value = false;
    return;
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    loading.value = false;
    return;
  }


  // added for extra authentication
  if (password.value.length < 6) {
    error.value = 'Password should be at least 6 characters';
    loading.value = false;
    return;
  }

  // sign up process
  try {
    const { error: supabaseError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (supabaseError) throw supabaseError;

    // redirect to login after successful sign-up
    router.push('/login');
    
  } catch (err) {
    error.value = err.message || 'Sign up failed. Please try again.';
  } finally {
    loading.value = false;
  }
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
            :rules="[v => !!v || 'Password is required', v => (v && v.length >= 6) || 'Min 6 characters']"
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