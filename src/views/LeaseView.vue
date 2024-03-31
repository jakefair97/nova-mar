<script setup>
// something something import the file containing the resident's lease; should I make this an actual page? Yes because Allie said most tenants will be using this from their phone and having them download the file to look at it somewhere else won't work because that's an unnecessary step
import { db } from '../firebase'
import { useCollection, useDocument } from 'vuefire'
import { collection, getDocs, query, doc } from 'firebase/firestore'
const lease = useDocument(doc(collection(db, 'leases'), 'w2Uig3fdAbW1QW9h4jLz'))
console.log(lease)
</script>

<template>
  <!-- Just need one element to display the lease -->
  <div class="lease">
    <h1>Your lease will be here</h1>

    <p>lease</p>
    <p>{{ q }}</p>
  </div>
</template>

<style scoped>
/* styling to center the lease */
.lease {
  text-align: center;
}
</style>
