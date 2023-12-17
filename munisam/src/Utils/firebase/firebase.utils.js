import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//importing methods to enable us using the  fireStore DB
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPKNbJOhVrQm05QSSWOZ49sG-xa01mQlg",
  authDomain: "munisam-chic-db.firebaseapp.com",
  projectId: "munisam-chic-db",
  storageBucket: "munisam-chic-db.appspot.com",
  messagingSenderId: "965179123194",
  appId: "1:965179123194:web:b9e4fac74cc3079f0af043",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/************************************************************************************** */
//here we create the DB
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef:", userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    // the user is not exist within thw collection, so create it
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //set the document into the Database
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user:", error.message);
    }
  }

  // if the users exists
  return userDocRef;
};
