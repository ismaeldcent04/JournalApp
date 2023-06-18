// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqZTphzUN6oaFf5snTqn5fW9K26upzsek",
  authDomain: "react-cursos-15a59.firebaseapp.com",
  projectId: "react-cursos-15a59",
  storageBucket: "react-cursos-15a59.appspot.com",
  messagingSenderId: "378251647985",
  appId: "1:378251647985:web:3522e174d4bf4c6df68250",
  measurementId: "G-VDZNBEEZ0Q",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const Firestore = getFirestore(FirebaseApp);
