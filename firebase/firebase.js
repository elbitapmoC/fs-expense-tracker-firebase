import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configure Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyA24RTac8oiCf3GWNIn7IicM1IediFMZrQ",
  authDomain: "elbitapmoc-expense-tracker.firebaseapp.com",
  projectId: "elbitapmoc-expense-tracker",
  storageBucket: "elbitapmoc-expense-tracker.appspot.com",
  messagingSenderId: "318671801140",
  appId: "1:318671801140:web:ee1c200e9b7b579682b361",
  measurementId: "G-Y2ZCGGSK1K",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
