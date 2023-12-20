import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPKNbJOhVrQm05QSSWOZ49sG-xa01mQlg",
  authDomain: "munisam-chic-db.firebaseapp.com",
  projectId: "munisam-chic-db",
  storageBucket: "munisam-chic-db.appspot.com",
  messagingSenderId: "965179123194",
  appId: "1:965179123194:web:b9e4fac74cc3079f0af043",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
/************************************************************************************* */
// these method are going to push the data from "Data.shopData.js into Firestore DB"

// collection method, helps us to get the document ref
export const addCollectionAndDocuments = async(collectionKey,objectToAdd)=>{
  /*
     objectToAdd:  is the Document to add
     collectionKey: it's key for example Categories */

  const collectionRef = collection(db, collectionKey);
  // to push all our objects to the collection as one successful transaction, we have to use batch
  const batch = writeBatch(db);
  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef,object)
  });

  await batch.commit();
  console.log('done')
}
/************************************************************************************** *
 * ******************Pulling the Data from the Database into our site*******************/
  export const getCategoriesAndDocuments = async()=>{
    const collectionRef = collection(db, 'categories');

    const q = query(collectionRef); // generating a query of these collectionRef 

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
      const {title, items} = docSnapshot.data();
      acc[title.toLowerCase()] = items
      return acc
    },{})

    return categoryMap;
  }
/*************************************************************************************** */

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutCurrentUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
