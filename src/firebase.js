// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";

//auth

import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDxd9SccexvmOw5jxL19x9g1Ynq4Jxi8ks",
  authDomain: "fir-5e014.firebaseapp.com",
  projectId: "fir-5e014",
  storageBucket: "fir-5e014.firebasestorage.app",
  messagingSenderId: "415871840652",
  appId: "1:415871840652:web:0ae1026734242e796466a9",
  measurementId: "G-KVRSMVCYCV"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()