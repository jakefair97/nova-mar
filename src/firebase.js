// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  orderBy,
  query,
  limit,
  serverTimestamp
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCklXra_9koZ9_YrwgRHEd5X5gADpqQhQI',
  authDomain: 'nova-scoti.firebaseapp.com',
  projectId: 'nova-scoti',
  storageBucket: 'nova-scoti.appspot.com',
  messagingSenderId: '1087595797990',
  appId: '1:1087595797990:web:a5fb04702f710ef719ca27',
  measurementId: 'G-HP422RL6NS'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth()
export { firebaseApp, db, auth }
