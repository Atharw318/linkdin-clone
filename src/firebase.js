import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0RXgh_E7Xcb0Pp8fhk8ZYUb2S16fgeq8",
    authDomain: "linkedin-clone-eea1b.firebaseapp.com",
    projectId: "linkedin-clone-eea1b",
    storageBucket: "linkedin-clone-eea1b.appspot.com",
    messagingSenderId: "478328721667",
    appId: "1:478328721667:web:00cfef4d7f3f1966e11936",
    measurementId: "G-8GQEHGKL2W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db ,auth};