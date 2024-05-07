<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SignIn from './components/SignIn.vue'
import LoggedIn from './components/LoggedIn.vue'

import { useCurrentUser, useFirebaseAuth } from 'vuefire'


const user = useCurrentUser()
const auth2 = useFirebaseAuth()

</script>

<template>
  <!-- implement v-if to only show the buttons if the user is logged in -->
  <div v-if="!user">
    <SignIn />
  </div>

  <div v-else>
    <LoggedIn />
  </div>

  <RouterView />
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

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
