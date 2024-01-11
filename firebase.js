// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZopgi49JX9MGPKA7toqyqhjQzQZkhjNA",
  authDomain: "uas-mobile-5f489.firebaseapp.com",
  projectId: "uas-mobile-5f489",
  storageBucket: "uas-mobile-5f489.appspot.com",
  messagingSenderId: "800638639553",
  appId: "1:800638639553:web:bda57affa2a354d0036340",
  measurementId: "G-GME02Y3DNY"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIRESTORE_DB = getFirestore(FIREBASE_APP);

export {FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB, getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc};

