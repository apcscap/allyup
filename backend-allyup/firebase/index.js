/*
  firebase/index.js
*/
const firebase = require("firebase-admin");

const credentials = require("./allyup-fb0dc-firebase-adminsdk-ljup8-75c4777f6d.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://allyup-fb0dc-default-rtdb.firebaseio.com/",
});

module.exports = firebase;