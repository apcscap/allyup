const firebase = require('../firebase/index')

function getUserByUID(uid, callback) {
    firebase.database().ref('users/' + uid).get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log('snapshot' + snapshot.val())
            callback(null, snapshot.val())
        } else {
            callback(null, null)
        }
    }).catch((error) => {
        console.error(error);
        callback(error, null)
    })
}

async function storeUserData(uid, userObj) {
    firebase.database().ref('users/' + uid).set(userObj);
}

function createPost(uid, postID, postObj) {
    // will store all posts under 'posts'
    firebase.database().ref('posts/' + postID).set(postObj);
    // will store post under a user id
    firebase.database().ref('usersPosts/' + uid + '/' + postID).set(postObj);
}

function getPostByUser(uid, callback) {
    firebase.database().ref('usersPosts/' + uid).get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log('snapshot' + snapshot.val())
            callback(null, snapshot.val())
        } else {
            callback(null, null)
        }
    }).catch((error) => {
        console.error(error);
        callback(error, null)
    })
}

function getAllPosts(callback) {
    firebase.database().ref("posts/").get().then((snapshot) => {
        if (snapshot.exists()) {
            callback(null, snapshot.val())
        } else {
            callback(null, null)
        }
    }).catch((error) => {
        console.error(error);
        callback(error, null)
    })
}

function getPostByID(postID, callback) {
    firebase.database().ref("posts/" + postID).get().then((snapshot) => {
        if (snapshot.exists()) {
            callback(null, snapshot.val())
        } else {
            callback(null, null)
        }
    }).catch((error) => {
        console.error(error);
        callback(error, null)
    })
}

// function getAllPostsByCat(category, callback) {
//     const ref = firebase.database().ref("posts")
//     ref.orderByChild("category").equalTo(category).on('child_changed', (postSnapShot) => {
//         postSnapShot.forEach(element => {
//             console.log(element)
//         });
//         if (postSnapShot.exists()) {
//             callback(null, postSnapShot.val())
//         } else {
//             callback(null, null)
//         }
//     })
// }

function getAllPostsByCat(category, callback) {
    firebase.database().ref("posts/").get().then((postSnapshot) => {
        if (postSnapshot.exists()) {
            const data = postSnapshot.val()
            const postsInCat = Object.keys(data)
                                .map(function(key) { return data[key] })
                                .filter(item => item['category'] == category)
            callback(null, postsInCat)
        } else {
            callback(null, null)
        }
    }).catch((error) => {
        console.error(error);
        callback(error, null)
    })
}

function donateToPost(postID, uid, donationObj, callback) {
    firebase.database().ref('userDonations/' + uid).set(donationObj)
    firebase.database().ref("posts/" + postID).get().then((postSnapshot) => {
        if (postSnapshot.exists()) {
            const post = postSnapshot.val()
            firebase.database().ref('userCompletedDonations/' + post.uid).set(donationObj)
            callback(null, donationObj)
        } else {
            console.log("We couldn't get data from the DB")
            callback(null, null)
        }
    }).catch((error) => {
        console.error(error);
        callback(error, null)
    })
}

module.exports = {
    storeUserData,
    getUserByUID,
    createPost,
    getPostByUser,
    getAllPosts,
    getAllPostsByCat,
    getPostByID,
    donateToPost,
}