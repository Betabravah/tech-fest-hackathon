// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyAubdPnUyNz9ts7E3zYuSXRR9rK-fjUmao",
//   authDomain: "tech-fest-hackathon.firebaseapp.com",
//   projectId: "tech-fest-hackathon",
//   storageBucket: "tech-fest-hackathon.appspot.com",
//   messagingSenderId: "475852891355",
//   appId: "1:475852891355:web:260f168d7dc4613cc858fe",
//   measurementId: "G-QMSC5X6HB3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1hi18mVLoyH9g5-Eirgu_82wQVyL_eOU",
  authDomain: "techfest-2bcb5.firebaseapp.com",
  projectId: "techfest-2bcb5",
  storageBucket: "techfest-2bcb5.appspot.com",
  messagingSenderId: "964463186985",
  appId: "1:964463186985:web:e27088860098492962f838",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
