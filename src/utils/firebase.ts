// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsN7lKbgANna3VwarfUCZhbXQHM8Nfet0",
  authDomain: "vue-firebase-60c96.firebaseapp.com",
  projectId: "vue-firebase-60c96",
  storageBucket: "vue-firebase-60c96.firebasestorage.app",
  messagingSenderId: "1097897118318",
  appId: "1:1097897118318:web:9971fc828089a4a0b3b47f",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
