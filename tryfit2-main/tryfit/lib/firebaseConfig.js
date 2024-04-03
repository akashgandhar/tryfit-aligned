import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaEcJaNIlRnmqL8QH5BFTbSMUeiMNyE_E",
  authDomain: "tryfit-fabrics.firebaseapp.com",
  projectId: "tryfit-fabrics",
  storageBucket: "tryfit-fabrics.appspot.com",
  messagingSenderId: "105709806035",
  appId: "1:105709806035:web:dbb3dbf033851666020f26",
  measurementId: "G-NYQ5W1TQL7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};