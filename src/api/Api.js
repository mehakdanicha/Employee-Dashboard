// src/api/Api.js
import { db } from "../Firebase"; // import your initialized Firestore
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Reference to employees collection
const empCollection = collection(db, "employees");

// Get all employees
export const getEmployees = async () => {
  const snapshot = await getDocs(empCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Add new employee
export const addEmployee = async (employee) => {
  await addDoc(empCollection, employee);
};

// Update existing employee
export const updateEmployee = async (id, employee) => {
  const empDoc = doc(db, "employees", id);
  await updateDoc(empDoc, employee);
};

// Delete employee
export const deleteEmployee = async (id) => {
  const empDoc = doc(db, "employees", id);
  await deleteDoc(empDoc);
};
