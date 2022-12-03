import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDW9Eqgoc3aLndbqLNFRUWQ2E7ghwsvuCc",
  authDomain: "clone-1e175.firebaseapp.com",
  projectId: "clone-1e175",
  storageBucket: "clone-1e175.appspot.com",
  messagingSenderId: "788436343457",
  appId: "1:788436343457:web:0b880ad355d0d640c26ee0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
