import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export { db }