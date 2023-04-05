// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/compat/app";
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx32GMjq20OP7ipQqERaoFDO0jYP_Lajg",
  authDomain: "react-blog-296df.firebaseapp.com",
  projectId: "react-blog-296df",
  storageBucket: "react-blog-296df.appspot.com",
  messagingSenderId: "1060474547685",
  appId: "1:1060474547685:web:0fd39ecf55dd49e442530c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();