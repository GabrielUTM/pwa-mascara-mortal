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
  apiKey: "AIzaSyBEAgG59FYSq8xv5Jd2TV-Y5FmB7u_S6fE",
  authDomain: "practicaplanetas-4a148.firebaseapp.com",
  databaseURL: "https://practicaplanetas-4a148-default-rtdb.firebaseio.com",
  projectId: "practicaplanetas-4a148",
  storageBucket: "practicaplanetas-4a148.firebasestorage.app",
  messagingSenderId: "4136662476",
  appId: "1:4136662476:web:b3aec17bc7ef705187d969",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, getDocs, collection };
