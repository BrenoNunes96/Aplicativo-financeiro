// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQIKqnPlpdz4lusuPEzoLnGJF0LpnfxNw",
  authDomain: "hpproject-65d6d.firebaseapp.com",
  databaseURL: "https://hpproject-65d6d-default-rtdb.firebaseio.com",
  projectId: "hpproject-65d6d",
  storageBucket: "hpproject-65d6d.firebasestorage.app",
  messagingSenderId: "192455258021",
  appId: "1:192455258021:web:b0aee42a3923cacc27024c",
  measurementId: "G-RKYEGXSLT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);