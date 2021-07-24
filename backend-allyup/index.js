const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware");
const firebase = require("./firebase/index")

const app = express();
app.use(cors());

// app.use("/");

app.use("/api/signup", (req, res) => {

    const { email, password } = req.query

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user)
        res.send(user)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        res.send(errorMessage)
    });
})

app.use("/api/signin", (req, res) => {
    const { email, password } = req.query
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...

        res.send(user.email)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        res.send(errorMessage)
    });
})

app.use("/api/logout", (req, res) => {
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
        res.status(200).send("Sign-out successful")
    }).catch((error) => {
    // An error happened.
        res.status(401).send('We made and oopsy')
    });
})
app.listen(4000, () => console.log("The server is running at PORT 4000"));