// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyxN-QeGHxFtZ-h0yterzZCiIS-ttI28w",
  authDomain: "groupup-3ea85.firebaseapp.com",
  projectId: "groupup-3ea85",
  storageBucket: "groupup-3ea85.appspot.com",
  messagingSenderId: "282705229492",
  appId: "1:282705229492:web:7a7afdfc2f8a55bff849e1",
  measurementId: "G-2BGH0CDBDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);