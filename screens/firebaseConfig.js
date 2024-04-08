// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAg6zO7GEtLzPKe24byhy8JuX373X2kSs",
  authDomain: "lab1-and103.firebaseapp.com",
  databaseURL: "https://lab1-and103-default-rtdb.firebaseio.com",
  projectId: "lab1-and103",
  storageBucket: "lab1-and103.appspot.com",
  messagingSenderId: "986137386185",
  appId: "1:986137386185:web:9a7c3531b4356b8b5a4118",
  measurementId: "G-F48NETNLH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE = getFirestore(FIREBASE_APP);
export const DATABASE= getDatabase(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);