<!-- submit maintenance requests -->

<script setup>
// need authentication to get name and property via UID
import auth from '../firebase'




</script>

<template>

  <!-- include the fields name, residence, describe the issue, urgency, enter with or w/o you there -->

  <form v-on:submit.prevent="addRequest">
    <p>Name: <input type="text" v-model="name" id="name" value="Resident's name" readonly></p>
    <p>Property: <input type="text" v-model="property" id="property"></p>
    

    <button type="submit">Submit</button>
  </form>
  <h1>You can submit a maintenance request here!</h1>
</template>

<style scoped>



</style>