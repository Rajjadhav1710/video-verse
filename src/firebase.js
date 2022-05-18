import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBvkmojJgbuUvZxj9V1U-u_Y9ikjxP3Cng",
    authDomain: "video-verse.firebaseapp.com",
    projectId: "video-verse",
    storageBucket: "video-verse.appspot.com",
    messagingSenderId: "835634827870",
    appId: "1:835634827870:web:cde7c31a2fc90768c31acf"
};

firebase.initializeApp(firebaseConfig);

//thats it app is connected to firebase