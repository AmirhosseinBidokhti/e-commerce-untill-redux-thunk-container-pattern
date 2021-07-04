// base import, allow us to use the ones we then explicitly import
// they will automatically attched to this firestore keyword
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAmceHoGHgDaox9GWcAoQQLgYtgmNmVgiQ",
  authDomain: "crown-db-ebf10.firebaseapp.com",
  projectId: "crown-db-ebf10",
  storageBucket: "crown-db-ebf10.appspot.com",
  messagingSenderId: "1043433345243",
  appId: "1:1043433345243:web:8607efa06b2d2867e1bcfe",
  measurementId: "G-GV9YHC0HCD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Create an instance of the Google provider object
const googleProvider = new firebase.auth.GoogleAuthProvider();

//const twitterProvider = new firebase.auth.TwitterAuthProvider();

// Trigger google popup when ever we use this google auth provider
googleProvider.setCustomParameters({ prompt: "select_account" });

// Function that calls the popup sign in

//export const signInWithGoogle = firebase.auth().signInWithPopup(googleProvider);
// instead
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// now go to firebase panel and enable the google auth in sidebar we have.also select project support email
// now we have oAuth enabled for our project

// in case you want the whole library
export default firebase;
