// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKQAJGdOx9lwzXRs7D1gPk8_gjSgRZ4ZA",
  authDomain: "boituxz-blog-website.firebaseapp.com",
  databaseURL: "https://boituxz-blog-website-default-rtdb.firebaseio.com",
  projectId: "boituxz-blog-website",
  storageBucket: "boituxz-blog-website.appspot.com",
  messagingSenderId: "921666376744",
  appId: "1:921666376744:web:d625d24a79e0a04507d11d",
  measurementId: "G-H37WT80LBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth, app}