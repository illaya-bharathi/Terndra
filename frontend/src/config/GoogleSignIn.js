import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCLKm0KJzd151w31cKW9SjR2MRYbtghy-Y",
  authDomain: "terndra-a3402.firebaseapp.com",
  projectId: "terndra-a3402",
  storageBucket: "terndra-a3402.firebasestorage.app",
  messagingSenderId: "261288732259",
  appId: "1:261288732259:web:673537447868d2405a7a56",
  measurementId: "G-K4LPT0KMJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}