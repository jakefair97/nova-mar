<!-- submit maintenance requests -->

<script setup>
// need authentication to get name and property via UID

</script>



<template>

  <!-- include the fields name, residence, describe the issue, urgency, enter with or w/o you there -->

  <form v-on:submit.prevent="addRequest">
    <p>Name:</p>
    

    <button type="submit">Submit</button>
  </form>
  <h1>You can submit a maintenance request here!</h1>
</template>

<style scoped>



</style>