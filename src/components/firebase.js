import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD1F-jnsirVbYFAb-P_ppVgSGOf77PFVnw",
  authDomain: "authrntication-webapp.firebaseapp.com",
  projectId: "authrntication-webapp",
  storageBucket: "authrntication-webapp.appspot.com",
  messagingSenderId: "96125885640",
  appId: "1:96125885640:web:8617c94c11be6b7d1e59fd",
  measurementId: "G-5J9T4GJ559",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
