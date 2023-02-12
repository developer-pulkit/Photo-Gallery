import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDRSBeZuaczP8gnHIxlEtqSKQaAA96X98",
  authDomain: "photo-gallery-b551b.firebaseapp.com",
  projectId: "photo-gallery-b551b",
  storageBucket: "photo-gallery-b551b.appspot.com",
  messagingSenderId: "904586867126",
  appId: "1:904586867126:web:ec20503eb623413d9a5117",
  measurementId: "G-CY6QVVD0VZ",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
