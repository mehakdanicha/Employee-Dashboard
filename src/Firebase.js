// src/firebase.js
// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";


// Replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCdzlyItbl4M1Rov7Nse_3nUfGu2hWH_40",
  authDomain: "employees-data-8b4bb.firebaseapp.com",
  projectId: "employees-data-8b4bb",
  storageBucket: "employees-data-8b4bb.firebasestorage.app",
  messagingSenderId: "935169577220",
  appId: "1:935169577220:web:4125f7776dd2dd16168051",
  measurementId: "G-135P2GV8EE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, doc, updateDoc, deleteDoc };
