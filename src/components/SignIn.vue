<script>
import { GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth'
export const googleAuthProvider = new GoogleAuthProvider()
export const emailAuthProvider = new EmailAuthProvider()
</script>

<script setup>
// import Firebase functionality to handle the sign in event
import { signInWithPopup, signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { ref } from 'vue'
// import { onMounted } from 'vue';

import { useFirebaseAuth } from 'vuefire'

const auth = useFirebaseAuth()
const auth2 = getAuth();

// sign in with google
function signInRedirect() {
  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // console.log(token)
      // The signed-in user info.
      // const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((reason) => {
      console.error('Failed signInRedirect', reason)
      // error.value = reason
    })
}
let email = '';
let password = '';
// sign in with email
function signInPW(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    console.log(email);
}

</script>

<template>
  <!-- sign in using google account; will add email and password later if necessary -->
  <div class="container">
    <h1>Welcome! Please login</h1>
    <button @click="signInRedirect">Login</button>
  <form @submit.prevent="signInPW(email, password)">
    <input v-model="email" type="email" placeholder="Email" required>
    <input v-model="password" type="password" placeholder="Password" required>
    <button @submit="signInPW(email, password)">Sign in</button>
    
  </form>   
  </div>

 
</template>

<style scoped>
/* make it look nice */
* {
  font-size: 27px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.container > * {
  margin: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

/* input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
} */

h1 {
  color: white;
  font-size: 30px;
  background-color: gray;
  width: 100%;
  text-align: center;
}

button {
  align-self: center;
}
</style>
