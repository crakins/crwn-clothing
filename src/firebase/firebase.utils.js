import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBESpn2pBXri7ogWsQ3iagpHPJnsOuTSmk",
    authDomain: "crwn-db-dcc6f.firebaseapp.com",
    databaseURL: "https://crwn-db-dcc6f.firebaseio.com",
    projectId: "crwn-db-dcc6f",
    storageBucket: "crwn-db-dcc6f.appspot.com",
    messagingSenderId: "1070524495884",
    appId: "1:1070524495884:web:fe8fa9b02ada2cba88d629"
  };

  // take user auth object from firebase and store in database
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // query firebase to see if user already exists 
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })

      } catch (error) {
          console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;