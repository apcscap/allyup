const express = require("express");
const cors = require("cors");
const firebase = require("./firebase/index");
const firUtils = require("./util/firUtils.js");
const { v4:uuidv4 } = require("uuid");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use("/");

/* Signs up a user
    Params: HTTP Request
    Returns: User Object (JSON) 
*/
app.use("/api/signup", (req, res) => {

    const { name, email, password, isShelter, shelterType, address, imageURL } = req.body
    console.log(name)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;

        const userObj = {
            name: name, 
            email: user.email,
            isShelter: isShelter,
            shelterType: shelterType,
            address: address,
            imageURL: imageURL,
        }
        
        firUtils.storeUserData(user.uid, userObj)

        res.send(userObj)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.message)
        
        res.send(errorMessage)
    });
})

/* Get the current user that's signed in
    Params: None
    Returns: User Object (JSON) 
*/
app.use("/api/user", (req, res) => {
    const user = firebase.auth().currentUser
    if(!user) {
        return res.status(501).send("User not logged in")
    }
    firUtils.getUserByUID(user.uid, (err, userSnapshot) => {
        if(err) {
            res.status(501).end(err.message)
        }
        res.send(userSnapshot)
    })
})

/* Get the profile of a user givin ID
    Params: ID in the url path
    Returns: User Object (JSON) 
*/
app.use("/api/profile/:id", (req, res) => {
    const uid = req.params.id
    firUtils.getUserByUID(uid, (err, userSnapshot) => {
        if (err) {
            res.status(401).end(err.message)
        }
        res.send(userSnapshot)
    })
})

/* Sign in User
    Params: Http request {email: String, password: String }
    Returns: User Object (JSONN) 
*/
app.use("/api/signin", (req, res) => {
    const { email, password } = req.body
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        
        firUtils.getUserByUID(user.uid, (err, userSnapshot) => {
            if (err) {
                res.status(401).end(err.message)
            }
            res.send(userSnapshot)
        })
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        res.status(401).send(errorMessage)
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

/* Create a post for a shelter or user
    Params: HTTP Request
    Returns: Post Obj (JSON)
*/
app.use("/api/post/create", (req, res) => {
    const user = firebase.auth().currentUser;
    if(!user) {
        return res.status(501).send("User not logged in")
    }
    const postID = uuidv4();
    const { title, description, quantity, isRequest, productLink, category } = req.body

    const postObj = {
        postID: postID,
        uid: user.uid, // uid of the creator of the post
        title: title,
        description: description,
        date: Date.now(),
        quantity: quantity,
        isRequest: isRequest,
        productLink: productLink,
        category: category,
    }
    
    firUtils.createPost(user.uid, postID, postObj);
    res.send(postObj);
})

app.use("/api/posts/", (req, res) => {
    firUtils.getAllPosts(function(error, postSnapshot) {
        if(error) {
            res.status(401).send(error.message)
        }
        const postArray = Object.keys(postSnapshot).map(function(key) { return postSnapshot[key] })
        res.send(postArray)
    })
})
/* Retrieve one post by the id
    Params: None
    Returns: [Post] (JSON) 
*/
app.use("/api/post/:id", (req, res) => {
    const postID = req.params.id;
    res.send(postID);
})

/* Retrieve all posts made by a user
    Params: None
    Returns: [Post] (JSON) 
*/
app.use("/api/userposts/:id", (req, res) => {
    const uid = req.params.id;
    firUtils.getPostByUser(uid, (err, postSnapshot) => {
        if(err) {
            res.status(401).send(err.message)
        }
        const postArray = Object.keys(postSnapshot).map(function(key) { return postSnapshot[key] })
        res.send(postArray)
    })
})

/* Retrieve all posts under a category
    Params: URL param (String)
    Returns: [Post] (JSON) 
*/
app.use("/api/category/:cat", (req, res) => {
    const category = req.params.cat;
    console.log(category)
    firUtils.getAllPostsByCat(category, (err, postsInCat) => {
        if(err) {
            res.status(401).send(err.message)
        }
        res.send(postsInCat)
    })
})

app.listen(4000, () => console.log("The server is running at PORT 4000"));