// Import the functions you need from the SDKs you need
// import { initializeApp } from "/firebase/app";
import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js'
// import { getAnalytics } from "/firebase/analytics";
import { getAnalytics} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js'
import {getDatabase, set, get, update, remove, ref, child} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js'

var firebase = require('firebase');
var firebaseui = require('firebaseui');
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh5FjgJFQVCOC-IqWSFx7R2uwMNagJkZQ",
  authDomain: "test-8620d.firebaseapp.com",
  databaseURL: "https://test-8620d-default-rtdb.firebaseio.com",
  projectId: "test-8620d",
  storageBucket: "test-8620d.appspot.com",
  messagingSenderId: "392063023409",
  appId: "1:392063023409:web:16e471ae622e55ce4a9810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

const dbref = ref(db);

get(child(dbref, "a/"))
.then((snapshot)=>{
  safsdf.innerHTML = snapshot.val();
})





