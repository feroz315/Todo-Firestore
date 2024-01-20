import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWsI3Z-UrJAW0TxSzBfJvi8U9tDgNjXcY",
  authDomain: "react-todo-aadb4.firebaseapp.com",
  projectId: "react-todo-aadb4",
  storageBucket: "react-todo-aadb4.appspot.com",
  messagingSenderId: "95093655151",
  appId: "1:95093655151:web:ed3b5afad43bc3655c6f9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { db,auth };