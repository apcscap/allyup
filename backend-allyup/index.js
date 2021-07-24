const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware");
const firebase = require("./firebase/index")

const app = express();
app.use(cors());

// app.use("/");

/* Signs up a user
    Params: None
    Returns: User Object (JSON) 
*/
app.use("/api/signup", (req, res) => {

    const { email, password } = req.query

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user)
        res.send(user).uid
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        res.send(errorMessage)
    });
})

/* Get the current user that's signed in
    Params: None
    Returns: User Object (JSON) 
*/
app.use("/api/user", (req, res) => {
    const user = firebase.auth().currentUser
    if (!user) {
        return res.status(401).end('There is no user signed in')
    }
    res.send(user.uid)
})

/* Sign in User
    Params: Http request {email: String, password: String }
    Returns: User Object (JSONN) 
*/
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

/* Logs user out
    Params: None
    Returns: Status message
*/
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