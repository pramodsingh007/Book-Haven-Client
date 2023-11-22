// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCjy5PLPO9EZNBbLF7T-2Ce1Ivpmt8UHc",
  authDomain: "book-haven-9c679.firebaseapp.com",
  projectId: "book-haven-9c679",
  storageBucket: "book-haven-9c679.appspot.com",
  messagingSenderId: "30729911523",
  appId: "1:30729911523:web:a50c04d548ab09ffdcd9d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;