// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfBOQAQrFdP9sFAVUVRWIBoq_uaH9PAN4",
  authDomain: "integfinal.firebaseapp.com",
  projectId: "integfinal",
  storageBucket: "integfinal.appspot.com",
  messagingSenderId: "827205993682",
  appId: "1:827205993682:web:eb01e1389adcea6a20190b",
  measurementId: "G-8M4ZX156YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
    db
}
const analytics = getAnalytics(app);