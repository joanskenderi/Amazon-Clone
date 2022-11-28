import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIXFx1wUMH9rQoqHiTLF0A3hY1RudfdSk",
  authDomain: "clone-c61d1.firebaseapp.com",
  projectId: "clone-c61d1",
  storageBucket: "clone-c61d1.appspot.com",
  messagingSenderId: "938842022377",
  appId: "1:938842022377:web:c2362aa8a165b5ae90ab78",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
