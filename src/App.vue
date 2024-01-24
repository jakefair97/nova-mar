<script>
  export const app = initializeApp(firebaseConfig);
  // import auth from './views/SignInView.vue'
</script>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { initializeApp } from 'firebase/app';
// import { signInWithRedirect, signInWithEmailAndPassword} from "firebase/auth"
import { firebaseConfig } from './firebase';

import { useCurrentUser } from 'vuefire';
import { signOut, getAuth } from 'firebase/auth';

const user = useCurrentUser();
const auth = getAuth();



// function signUserOut(auth) {
//   signOut(auth).then(() => {
//     console.log("sign out good")
//   }).catch((error) => {
//     console.error(error)
//   })
// }

// const app = initializeApp(firebaseConfig);

// console.log(user);

</script>

<template>
  <!-- implement v-if to only show the buttons if the user is logged in -->
  <RouterView v-if="this.$route.path=='/'"/>
  <div v-if="user" class="buttons" >
    <nav>
      <RouterLink to="/">Home</RouterLink>

      <RouterLink to ='/pay'>Pay Rent</RouterLink>
  
      <RouterLink to="/lease">View Lease</RouterLink>
  
      <RouterLink to="/maintenance">Maintenance Request</RouterLink>
  
      <RouterLink to="/contact">Contact</RouterLink>

      <button @click="signOut(auth)">Sign Out</button>
    </nav>

  </div>
  <RouterView v-if="this.$route.path!=='/'"/>
  
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}*/

nav {
  width: 100%;
  font-size: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}

/*@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
