<script setup>
import { RouterLink } from 'vue-router'

import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signOut } from 'firebase/auth';

const user = useCurrentUser();
// const auth = getAuth();
const auth2 = useFirebaseAuth();

console.log(user.displayName);

</script>

<template>

<h1>Hello, {{ user.displayName }}!</h1>
  <div class="buttons">
    <nav>
      <RouterLink to="/">Home</RouterLink>

      <RouterLink to ='/pay'>Pay Rent</RouterLink>
  
      <RouterLink to="/lease">View Lease</RouterLink>
  
      <RouterLink to="/maintenance">Maintenance Request</RouterLink>
  
      <RouterLink to="/contact">Contact</RouterLink>

      <!-- <button @click="signOut(auth2)">Sign Out</button> -->

      <RouterLink to="/" @click="signOut(auth2)">Sign Out</RouterLink>
    </nav>

  </div>

</template>

<style scoped>
h1 {
  text-align: center;
  color: white;
}

nav {
  width: 100%;
  font-size: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

button {
  background-color: transparent;
  border-width: 0;
  font-size: 25px;
  color: hsla(160, 100%, 37%, 1);
  padding: 3px;
}

/* nav a.router-link-exact-active {
  color: var(--color-text);
} */

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

</style>
