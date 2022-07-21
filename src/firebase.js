// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjxm3YWc2yNtWw3JJHqcwMKaeCA2ZUwWo",
  authDomain: "vassuchatapp.firebaseapp.com",
  projectId: "vassuchatapp",
  storageBucket: "vassuchatapp.appspot.com",
  messagingSenderId: "1053188338634",
  appId: "1:1053188338634:web:2870f93f4a2b36b7c51533",
  measurementId: "G-XLBQ3F5WNC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);