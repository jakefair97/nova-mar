<script setup>
  // import Firebase functionality to handle the sign in event
</script>

<template>
<!-- simple username and password fields -->
<form action="signin">

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
        
    <button type="submit">Login</button>
  </div>

</form>
  
</template>

<style scoped>
/* make it look nice */
* {
  font-size: 27px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}
form {border: 3px solid #3e3e3e;}

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
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  align-self: center;
}

</style>