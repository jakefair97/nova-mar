<script setup>
  // import Firebase functionality to handle the sign in event
  import { firebaseApp } from '../firebase';
  import { getAuth } from 'firebase/auth';

  import firebase from 'firebase/compat/app';
  import * as firebaseui from 'firebaseui';
  import 'firebaseui/dist/firebaseui.css';

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(getAuth(firebaseApp));

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    requireDisplayName: false}
  ],
  // Other config options...
});

const auth = useFirebaseAuth()
console.log(auth);
const signIn = (email, password) => {
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed In
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });}


  var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

ui.start('#firebaseui-auth-container', uiConfig);
</script>

<template>
<!-- simple username and password fields -->
<h1>Welcome! Please sign in</h1>
<div id="firebaseui-auth-container"></div>
<div id="loader">Loading...</div>
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