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

function storeUserData(uid, userObj) {
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
module.exports = {
    storeUserData,
    getUserByUID,
    createPost,
    getPostByUser,
}