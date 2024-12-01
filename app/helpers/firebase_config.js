// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxEndsUJaE5eDG9_CRT0GxSWj2tZE5k7g",
  authDomain: "mascara-mortal-c1288.firebaseapp.com",
  projectId: "mascara-mortal-c1288",
  storageBucket: "mascara-mortal-c1288.firebasestorage.app",
  messagingSenderId: "905656928147",
  appId: "1:905656928147:web:2a24fb681fc3ab271d0a66",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, getDocs, collection };
