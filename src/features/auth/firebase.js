import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZpBPkvAoUzUNaX7KEWyjcVotH79OOjvM",
  authDomain: "web-film-6f47d.firebaseapp.com",
  databaseURL: "https://web-film-6f47d-default-rtdb.firebaseio.com",
  projectId: "web-film-6f47d",
  storageBucket: "web-film-6f47d.appspot.com",
  messagingSenderId: "279956134256",
  appId: "1:279956134256:web:80b46a7153b5fa5a0097b5",
  measurementId: "G-H85QNSRPLJ"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;