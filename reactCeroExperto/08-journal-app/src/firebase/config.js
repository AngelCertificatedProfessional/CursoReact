// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3TPQVa_qLaETfX0scIHJrbCVdh8uyXys",
  authDomain: "react-cursos-6a3a4.firebaseapp.com",
  projectId: "react-cursos-6a3a4",
  storageBucket: "react-cursos-6a3a4.appspot.com",
  messagingSenderId: "817874926537",
  appId: "1:817874926537:web:d24079ce498175c4060618"
};

// Initialize Firebase
export const FirebaseApp    = initializeApp(firebaseConfig);
export const FirebaseAuth   = getAuth(FirebaseApp)
export const FirebaseDB     = getFirestore(FirebaseApp)