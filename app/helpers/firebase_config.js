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
  apiKey: "AIzaSyBRGQBXX3hRRzbdW3FzOFOG-ABYiM4zC4M",
  authDomain: "mascara-mortal.firebaseapp.com",
  projectId: "mascara-mortal",
  storageBucket: "mascara-mortal.firebasestorage.app",
  messagingSenderId: "149560846252",
  appId: "1:149560846252:web:e4d9acb2806109d0a67c09"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, getDocs, collection };
