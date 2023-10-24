// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBic_yVlIqPYOVIhVkKzToEisA6of-s5kQ",
  authDomain: "myfirstapp-5451c.firebaseapp.com",
  projectId: "myfirstapp-5451c",
  storageBucket: "myfirstapp-5451c.appspot.com",
  messagingSenderId: "97576788573",
  appId: "1:97576788573:web:0bc1ac313981d56ec823b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;