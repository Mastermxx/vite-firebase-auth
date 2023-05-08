<script setup lang="ts">
import {RouterLink} from "vue-router";
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const newUser = ref ({
  email: '',
  password: '',
})

async function createUser() {
  auth.signUp(
    newUser.value.email,
    newUser.value.password,
  );
}
</script>

<template>
  <nav>
    <div class="buttons-wrapper">
      <div class="button"><RouterLink to="/">Home</RouterLink></div>
      <div class="button">Log Out</div>
    </div>
    <div class="login-wrapper">
      Sign up:
      <input placeholder="email" type="email" v-model="newUser.email">
      <input placeholder="password" type="password" v-model="newUser.password">
      <button @click="createUser">Signup</button>
    </div>
  </nav>
</template>

<style scoped>
.buttons-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  .button {
    background: #2c2c2c;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #262626;
    color: #ddd;
  }
}
.login-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
</style>
