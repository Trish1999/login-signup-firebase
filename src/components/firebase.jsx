// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBowauUvXKdx8l9QfuXKlJECuz0_8rqnX8",
  authDomain: "login-signin-auth-93e57.firebaseapp.com",
  projectId: "login-signin-auth-93e57",
  storageBucket: "login-signin-auth-93e57.firebasestorage.app",
  messagingSenderId: "317260079331",
  appId: "1:317260079331:web:2092744a7e106ab7e065d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
