// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFgqgG-Tq4gcDx77xwYA6t3kiqQGFkgNM",
  authDomain: "satturno-499f0.firebaseapp.com",
  projectId: "satturno-499f0",
  storageBucket: "satturno-499f0.firebasestorage.app",
  messagingSenderId: "723294674539",
  appId: "1:723294674539:web:d97adc535f584aa32e9b2e",
  measurementId: "G-8Y3GKXPPQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
