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

module.exports = {
    storeUserData,
    getUserByUID,
}