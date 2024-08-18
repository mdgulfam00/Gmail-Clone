// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo9ouwUta-_Rt-MOhZh4BA5Ek_F1Vfqk8",
  authDomain: "clone-817a6.firebaseapp.com",
  projectId: "clone-817a6",
  storageBucket: "clone-817a6.appspot.com",
  messagingSenderId: "978956528892",
  appId: "1:978956528892:web:0629d103e8e57b4a297b79",
  measurementId: "G-0Q814BCRCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
