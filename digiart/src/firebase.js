import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAubdPnUyNz9ts7E3zYuSXRR9rK-fjUmao",
  authDomain: "tech-fest-hackathon.firebaseapp.com",
  projectId: "tech-fest-hackathon",
  storageBucket: "tech-fest-hackathon.appspot.com",
  messagingSenderId: "475852891355",
  appId: "1:475852891355:web:260f168d7dc4613cc858fe",
  measurementId: "G-QMSC5X6HB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;