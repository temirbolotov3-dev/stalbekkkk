// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore'ду кошобуз

const firebaseConfig = {
  apiKey: "AIzaSyAFOl1_zm46ipn4LC0SrKcqvgON4GPkSmE",
  authDomain: "lessonsadd.firebaseapp.com",
  projectId: "lessonsadd",
  storageBucket: "lessonsadd.appspot.com",
  messagingSenderId: "338927054668",
  appId: "1:338927054668:web:03f75355a298816c478a84"
};

// Firebase-ди ишке киргизүү
const app = initializeApp(firebaseConfig);

// Маалымат базасын (db) экспорттоо
export const db = getFirestore(app);