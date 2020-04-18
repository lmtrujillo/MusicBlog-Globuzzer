import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAt6qhnrYe8FurMTsbFb2sQ7rLlr_ltf34",
    authDomain: "musicblog-fec85.firebaseapp.com",
    databaseURL: "https://musicblog-fec85.firebaseio.com",
    projectId: "musicblog-fec85",
    storageBucket: "musicblog-fec85.appspot.com",
    messagingSenderId: "640080973591",
    appId: "1:640080973591:web:a96d724d1938226e527152",
    measurementId: "G-HBCBMH6E60"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase