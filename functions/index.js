const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.teste = functions.https.onCall((data, context) => {
    return "Functionou";
});

exports.sum = functions.https.onCall((data, context) => {
    var number1 = data.number1 || 0;
    var number2 = data.number2 || 0;
    return number1 + number2;
});

exports.upOneNumber = functions.firestore
    .document("/users/{userId}")
    .onCreate(async (snapshot, context) => {
        try{
            await snapshot.ref.update({age: snapshot.data().age + 1});
            return true;
        }catch(e){
            return e;
        }
    })