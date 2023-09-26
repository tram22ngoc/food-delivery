import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWcJMc3uYMJktra-VDjA-ty4_lyReY4U0",
  authDomain: "foodieapp-4ae90.firebaseapp.com",
  projectId: "foodieapp-4ae90",
  storageBucket: "foodieapp-4ae90.appspot.com",
  messagingSenderId: "798615064316",
  appId: "1:798615064316:web:c0acabaa229b37febd9179",
  measurementId: "G-YHK3X5J76H",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
