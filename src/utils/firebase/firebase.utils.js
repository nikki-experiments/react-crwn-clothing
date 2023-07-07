import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxDhRbKdKtNACNUVWBz7VHChTekXEjXbs",
  authDomain: "react-crwn-clothing-db-4442e.firebaseapp.com",
  projectId: "react-crwn-clothing-db-4442e",
  storageBucket: "react-crwn-clothing-db-4442e.appspot.com",
  messagingSenderId: "989869985682",
  appId: "1:989869985682:web:a4bedb0167c943056efb4b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Instantiate auth from Firebase Authentication
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Instantiate database from Firestore
export const db = getFirestore();

// Create method to create new user document in Firestore for each user who authenicates.
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
  ) => {

  if (!userAuth) return;

  // Which document are we looking to use? Doc takes 3 parameters = database instance, collection, unique id of user
  const userDocRef = doc(db, 'users', userAuth.uid);

  // Find the user data for that document.
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  if(!userSnapshot.exists()) {

    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // Then create the document with the data from userAuth and store it in my db collection
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }
    catch(error) {
      console.log('error creating the user', error.message);
    }

  }

  // if it does exist then just return existing document for that user
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);
