<script setup>
  // does in fact need a script (I think) when the user clicks the sign in button, send the user to the sign in page

</script>

<template>
<!-- simple welcome message and sign in button -->
  <div class="container">
    
    <h1>Welcome!</h1>

    <button>Sign in</button>

  </div>
  

</template>

<style scoped>
/* center the message and sign in button so the renters can see it clear as day */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

}

h1 {
  /* text-align: center; */
  font-size: 40px;
}

button {
  font-size: 40px;
  width: 50vw;
  /* margin-top: 40px; */
}
</style>