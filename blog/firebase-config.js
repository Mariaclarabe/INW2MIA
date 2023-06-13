// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpazoAgqF5VCa5HzHzEyvWgfDy4ZGrZoY",
  authDomain: "blog2mia-d11a2.firebaseapp.com",
  projectId: "blog2mia-d11a2",
  storageBucket: "blog2mia-d11a2.appspot.com",
  messagingSenderId: "813390531664",
  appId: "1:813390531664:web:7e0b57b3483b5ebb785555",
  measurementId: "G-44EY9HCLJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);