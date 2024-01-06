<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { firebaseApp } from './firebase';

// const signInWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// }

const user = true;

</script>

<template>
  <!-- implement v-if to only show the buttons if the user is logged in -->
  <RouterView v-if="this.$route.path=='/'"/>
  <div v-if="user" class="buttons" >
    <nav>
      <RouterLink v-if="this.$route.path!=='/'" to="/">Home</RouterLink>

      <RouterLink to ='/pay'>Pay Rent</RouterLink>
  
      <RouterLink to="/lease">View Lease</RouterLink>
  
      <RouterLink to="/maintenance">Maintenance Request</RouterLink>
  
      <RouterLink to="/contact">Contact</RouterLink>
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
  border-left: 1px solid var(--color-border);
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
