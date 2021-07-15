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
export const signInWithGoogle = () => auth.signInWithRedirect(googleProvider);

// now go to firebase panel and enable the google auth in sidebar we have.also select project support email
// now we have oAuth enabled for our project

// in case you want the whole library
export default firebase;

// Function that allows us to take user auth object got back from authentication library and then store it inside DB
// Since we're making API request we set it async
// Gets userAuth object from auth library and possibly additional data in from of an object.

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // check if valid user object exists otherwise exit the function (null returned)
  if (!userAuth) return;

  // if its not null, query inside firestore for document to see if it already exists
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // if it does not exist, create user, to create we use documentrefrence object not snap shot that only represent
  if (!snapShot.exists) {
    // properties we want to store
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // async request to our database, to store data now
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // what this function also does return the userRef always. because theres chance we wanna use this
  return userRef;
};
