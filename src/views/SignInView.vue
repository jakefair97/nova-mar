<script>
import { GoogleAuthProvider } from 'firebase/auth';
export const googleAuthProvider = new GoogleAuthProvider();

</script>

<script setup>
// import Firebase functionality to handle the sign in event
import { firebaseApp } from '../firebase';
import { EmailAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { onMounted } from 'vue';


import { useFirebaseAuth } from 'vuefire'

const auth = useFirebaseAuth()

// const error = undefined
function signInRedirect() {
  signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
    console.error('Failed signInRedirect', reason)
    // error.value = reason
  })
}

// onMounted(() => {
//   getRedirectResult(auth).catch((reason) => {
//     console.error('Failed redirect result', reason)
//     // error.value = reason
//   })
// });

</script>

<template>
<!-- simple username and password fields -->

<!-- <form action="signin">
  <div class="container">
    <h1>Welcome! Please sign in</h1>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" id="email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" id="psw" name="psw" required>
        
    <button type="submit" @click="signIn(email, psw)">Login</button>
  </div>

</form> -->
<h1>Welcome! Please sign in</h1>
<button @click="signInRedirect">Login</button>
  
</template>

<style scoped>
/* make it look nice */
* {
  font-size: 27px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.container{
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}

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