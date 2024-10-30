// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbv8We86xdT4_h9ezep-klE-Sg0BRwGBg",
  authDomain: "rent-up-608ad.firebaseapp.com",
  projectId: "rent-up-608ad",
  storageBucket: "rent-up-608ad.appspot.com",
  messagingSenderId: "443202233145",
  appId: "1:443202233145:web:284dde695aeb0115f6fee8",
  measurementId: "G-F0ZPTRFSVD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
