// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB99QJbadRhfapIcLIbsi2_Tf0Q8Z19IU",
  authDomain: "recipes-book-app-63bb9.firebaseapp.com",
  projectId: "recipes-book-app-63bb9",
  storageBucket: "recipes-book-app-63bb9.firebasestorage.app",
  messagingSenderId: "835737105165",
  appId: "1:835737105165:web:044c48cfb6f5e4ee123644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);