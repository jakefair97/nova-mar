<script setup>
  import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <h1>Welcome user!</h1>
  <!-- <div class="buttons">
    <nav>
      <RouterLink to ='/'>Pay Rent</RouterLink>
  
      <RouterLink to="/lease">View Lease</RouterLink>
  
      <RouterLink to="/">Maintenance Request</RouterLink>
  
      <RouterLink to="/">Contact</RouterLink>
      <RouterView/> 
    </nav>
  </div> -->
  
</template>

<style scoped>

  h1{
    text-align: center;
  }

  .buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  }

  button{
    width: 95vw;
    margin: 20px;
    padding: 10px;
    font-size: 30px;
    
  }

</style>