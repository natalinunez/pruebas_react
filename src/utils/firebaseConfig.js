// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Se coloca esta linea por documentacion
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGYqjHYn6GqxrqqVxOASk-Psz_j_DQPbk",
  authDomain: "bydany-93aee.firebaseapp.com",
  projectId: "bydany-93aee",
  storageBucket: "bydany-93aee.appspot.com",
  messagingSenderId: "363128527325",
  appId: "1:363128527325:web:0ca0fe911821732f65be34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Se coloca por documentacion
//inicializar mi base de datos
//const db = getFirestore();
const db = getFirestore(app);

export default db;

