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
