import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXWx49_mb-xvq2mqw6ZV5pjT-lKL6bgic",
  authDomain: "strift-op.firebaseapp.com",
  projectId: "strift-op",
  storageBucket: "strift-op.appspot.com",
  messagingSenderId: "889170322903",
  appId: "1:889170322903:web:7bebfbc0aed644813b5792",
  measurementId: "G-PR7G876LT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};