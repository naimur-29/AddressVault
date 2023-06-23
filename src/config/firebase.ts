// libraries:
import { initializeApp } from "firebase/app";

// config:
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "address-vault.firebaseapp.com",
  projectId: "address-vault",
  storageBucket: "address-vault.appspot.com",
  messagingSenderId: "830974402576",
  appId: "1:830974402576:web:507662b547ba8c89062a95",
  measurementId: "G-JY7PJVGMTK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
