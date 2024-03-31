<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SignIn from './components/SignIn.vue'
import LoggedIn from './components/LoggedIn.vue'

import { useCurrentUser, useFirebaseAuth } from 'vuefire'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  orderBy,
  query,
  limit,
  serverTimestamp
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCklXra_9koZ9_YrwgRHEd5X5gADpqQhQI',
  authDomain: 'nova-scoti.firebaseapp.com',
  projectId: 'nova-scoti',
  storageBucket: 'nova-scoti.appspot.com',
  messagingSenderId: '1087595797990',
  appId: '1:1087595797990:web:a5fb04702f710ef719ca27',
  measurementId: 'G-HP422RL6NS'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth()

const user = useCurrentUser()
const auth2 = useFirebaseAuth()

console.log(user.displayName)
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
