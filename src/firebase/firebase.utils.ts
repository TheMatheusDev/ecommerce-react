import { initializeApp } from 'firebase/app';
import { setDoc, doc, getFirestore, getDoc, DocumentReference, DocumentData } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

const firebaseConfig = {
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
auth.useDeviceLanguage();
const db = getFirestore(firebase);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => {
  if (auth.currentUser) {
    auth.signOut();
  }

  signInWithPopup(auth, provider).catch(() => {
    console.log('Google Authentication pop-up closed by the user or by a pop-up blocker.');
  });
};

const createUserProfileDoc = async (userAuth: User | null) => {
  if (!userAuth) return;

  const userRef: DocumentReference<DocumentData> = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toLocaleDateString('pt-BR');

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error creating user: ', error.message);
      }
    }
  }
};

export { db, auth, signInWithGoogle, createUserProfileDoc };
export default firebase;
