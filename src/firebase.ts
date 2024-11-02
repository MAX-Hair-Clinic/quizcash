import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcm1PlHs15kvftNuXtH_mCrs11Kzsr6yg",
  authDomain: "quizapp-aff5c.firebaseapp.com",
  projectId: "quizapp-aff5c",
  storageBucket: "quizapp-aff5c.appspot.com",
  messagingSenderId: "856857303255",
  appId: "1:856857303255:web:a6a9d6944f14e369167892",
};

// Initialize Firebase
const firestoreApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(firestoreApp);
auth.useDeviceLanguage();

export { auth };
