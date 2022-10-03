// import { initializeApp } from "./firebase/app";
// import { getDatabase } from "./firebase/database";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
//   // The value of `databaseURL` depends on the location of the database
//   apiKey: "AIzaSyA35aDry2OtC2rifEFrkxWAyxBame5LPEw",
//   authDomain: "buddy-a478e.firebaseapp.com",
//   projectId: "buddy-a478e",
//   storageBucket: "buddy-a478e.appspot.com",
//   messagingSenderId: "787425029798",
//   appId: "1:787425029798:web:8204439383fb651f954e67",
//   measurementId: "G-1MB486TXQ4",
//   databaseURL: "https://buddy-a478e-default-rtdb.firebaseio.com/",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);



// import firebase from "firebase/apps";
// import "firebase/database";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
//   // The value of `databaseURL` depends on the location of the database
//     apiKey: "AIzaSyA35aDry2OtC2rifEFrkxWAyxBame5LPEw",
//   authDomain: "buddy-a478e.firebaseapp.com",
//   projectId: "buddy-a478e",
//   storageBucket: "buddy-a478e.appspot.com",
//   messagingSenderId: "787425029798",
//   appId: "1:787425029798:web:8204439383fb651f954e67",
//   measurementId: "G-1MB486TXQ4",
//   databaseURL: "https://buddy-a478e-default-rtdb.firebaseio.com/",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// button1.addEventListener("click",()=>{
//   console.log("object");
// })

// import { getDatabase, ref, set } from "https://buddy-a478e-default-rtdb.firebaseio.com/";

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }


// // Initialize Realtime Database and get a reference to the service
// const database = firebase.database();


// import { doc, setDoc } from "firebase/firestore"; 


// // Add a new document in collection "cities"
// await setDoc(doc(db, "users", "A"), {
//   name: "AA",
//   birthday: "11/25/0000",
  
// });