// Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
const firebase = require("firebase")
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field

var firebaseConfig = {
    apiKey: "AIzaSyAoSNCpMlE5uSMiH0fKBBhi1ippQnYcieQ",
    authDomain: "allyup-fb0dc.firebaseapp.com",
    databaseURL: "https://allyup-fb0dc-default-rtdb.firebaseio.com",
    projectId: "allyup-fb0dc",
    storageBucket: "allyup-fb0dc.appspot.com",
    messagingSenderId: "518041433085",
    appId: "1:518041433085:web:5bb8f3e29b93f6fd771f94",
    measurementId: "G-KGW9LQ312K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase