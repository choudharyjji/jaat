const functions = require('firebase-functions');
const admin = require('firebase-admin');
var https = require('https');

admin.initializeApp(functions.config().firebase);

//create users 
exports.appUsers = functions.auth.user().onCreate(async (user) => {
    //console.log(snap.data());
    return admin.firestore().collection('users').doc(user.uid).set({
        firstName: "",
        lastName: "",
        email: "",
        phone: user.phoneNumber,
        phoneVerified: true,
        initials: "",
        refferedBy: "",
        userPhoto: "",
        createdAt: admin.firestore.FieldValue.serverTimestamp()
    },{merge: true}).then( snap => {
        console.log('User Added to DB Successfully');
    }).catch( (error) => {
        console.log('User Error: '+error);
    }) 
});