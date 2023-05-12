import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
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
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  if(!userSnapshot.exists()) {

    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // create / set the document with the data from userAuth in my db collection
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }
    catch(error) {
      console.log('error creating the user', error.message);
    }

  }

  return userDocRef;
}
