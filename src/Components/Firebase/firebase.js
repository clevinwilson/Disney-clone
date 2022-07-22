import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDqR__kuje58WDc1m2zSAZjhtEGhaj1JbA",
    authDomain: "disney-clone-8ad79.firebaseapp.com",
    projectId: "disney-clone-8ad79",
    storageBucket: "disney-clone-8ad79.appspot.com",
    messagingSenderId: "337531279546",
    appId: "1:337531279546:web:b203b0f50f0aff58c6ca83",
    measurementId: "G-WQCDWVNLZ7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);


export { auth, provider,db }
