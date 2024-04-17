<script setup>
// something something import the file containing the resident's lease; should I make this an actual page? Yes because Allie said most tenants will be using this from their phone and having them download the file to look at it somewhere else won't work because that's an unnecessary step
import { db } from '../firebase'
import { useDocument, useFirebaseStorage, useStorageFile } from 'vuefire'
import { collection, getDocs, getDoc, query, doc } from 'firebase/firestore'
import { ref } from 'firebase/storage';
// const lease1 = useDocument(doc(collection(db, 'leases'), 'w2Uig3fdAbW1QW9h4jLz'))

const myLease = useDocument(doc(db, 'leases', 'w2Uig3fdAbW1QW9h4jLz'))
const storage = useFirebaseStorage();
const leaseRef = ref(storage, 'leases/lease-practice.pdf');

const { url } = useStorageFile(leaseRef);

</script>

<template>
  <!-- Just need one element to display the lease -->
  <div class="lease">
    <h1>Your lease will be here</h1>
    <!-- <div v-for="lease in leases" :key="index">
        {{ lease.lease }}
    </div> -->
    <div>
        <!-- {{ myLease.lease }} -->
        <!-- {{ lease }} -->
        <iframe v-if="url" :src="url" type="application/pdf" width="100%" height="500" />
    </div>

  </div>
</template>

<style scoped>
/* styling to center the lease */
.lease {
  text-align: center;
}
</style>
