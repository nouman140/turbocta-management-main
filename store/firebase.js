import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCp4MjGoJAq3QFzZnJYjwGpDJvtNUGW3zE",
  authDomain: "turbocta-platform.firebaseapp.com",
  projectId: "turbocta-platform",
  storageBucket: "turbocta-platform.appspot.com",
  messagingSenderId: "384183337559",
  appId: "1:384183337559:web:efff39331e43845befd912",
  measurementId: "G-79L6LSW6DN",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
