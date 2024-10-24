<script setup>
import { db } from "../firebase"
import { RouterLink } from 'vue-router'

import { useCurrentUser, useFirebaseAuth, useDocument } from 'vuefire'
import { signOut } from 'firebase/auth'
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore'

const user = useCurrentUser()

const renter = useDocument(doc(collection(db, 'renters'), '1'))
const renter2 = getDoc(doc(db, 'renters', '1'));
// const auth = getAuth();
const auth2 = useFirebaseAuth()

// console.log(renter2.data())
</script>

<template>
  <h1>Hello, {{  }}!</h1>
  <div class="buttons">
    <nav>
      <RouterLink to="/">Home</RouterLink>

      <RouterLink to="/pay">Pay Rent</RouterLink>

      <RouterLink to="/lease">View Lease</RouterLink>

      <RouterLink to="/maintenance">Maintenance Request</RouterLink>

      <RouterLink to="/contact">Contact</RouterLink>

      <RouterLink to="/" @click="signOut(auth2)">Sign Out</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: white;
}

.buttons {
  display: flex;
  justify-content: center;
}

nav {
  font-size: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
