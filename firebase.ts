// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { get } from "http";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCItUCeQH4sclONIAJwZ7OJL4t7TGhAwtE",
    authDomain: "geekybytes-1f96f.firebaseapp.com",
    projectId: "geekybytes-1f96f",
    storageBucket: "geekybytes-1f96f.appspot.com",
    messagingSenderId: "734852044645",
    appId: "1:734852044645:web:8297f86ace69ab1583738c",
    measurementId: "G-FN7CYMT3G9"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const firestore = getFirestore(app);