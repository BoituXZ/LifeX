// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZm_pSfhL5CzELUQUBfuZ_E_rqfP1F_LQ",
  authDomain: "lifex-c5b65.firebaseapp.com",
  projectId: "lifex-c5b65",
  storageBucket: "lifex-c5b65.firebasestorage.app",
  messagingSenderId: "575342238218",
  appId: "1:575342238218:web:b323b062cefb9f2359ddf3",
  measurementId: "G-FXBGYLPVDD",
  databaseURL: "https://lifex-c5b65-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app);


export {auth, database};