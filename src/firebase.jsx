import firebase from 'firebase/app'

import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8IFpy_eXlILmBjK9oyGzPOWX9O8Azv1s",
    authDomain: "crud-d43d0.firebaseapp.com",
    projectId: "crud-d43d0",
    storageBucket: "crud-d43d0.appspot.com",
    messagingSenderId: "601103086704",
    appId: "1:601103086704:web:3308bb07313f605410f0b5"
  };

  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();