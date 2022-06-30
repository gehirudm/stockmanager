// Import the functions you need from the SDKs you need
const firebase = require("firebase/app");
require('firebase/database')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrlZWkwyUmNOuJiZMspKY8XobCIanSgyo",
  authDomain: "stockmanager-6a916.firebaseapp.com",
  projectId: "stockmanager-6a916",
  storageBucket: "stockmanager-6a916.appspot.com",
  messagingSenderId: "1039598534145",
  appId: "1:1039598534145:web:7fca6911280828cbc80a00",
  measurementId: "G-SGDX1YLEN6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);