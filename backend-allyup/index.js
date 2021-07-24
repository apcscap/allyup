const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware");
const firebase = require("./firebase/index")

const app = express();
app.use(cors());

app.use("/", authMiddleware);

app.use("/api/signup", (req, res) => {
    const { email, password } = req.body
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
    });
})

app.use("/api/signin", (req, res) => {
    const { email, password } = req.body
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
})

app.use("/api/logout", (req, res) => {
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
})
app.listen(4000, () => console.log("The server is running at PORT 4000"));