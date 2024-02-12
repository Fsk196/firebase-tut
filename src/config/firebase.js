import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTojKWbYa9q7yh_TNtd69pkdn-0Y5QAy8",
  authDomain: "fir-app-e6c8a.firebaseapp.com",
  projectId: "fir-app-e6c8a",
  storageBucket: "fir-app-e6c8a.appspot.com",
  messagingSenderId: "939714574885",
  appId: "1:939714574885:web:eb3ec89873a7aa6e285dcc",
  measurementId: "G-T4RPDGKK97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
