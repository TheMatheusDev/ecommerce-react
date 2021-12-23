import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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

const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch(() => {
    console.log('Google Authentication pop-up closed by the user or by a pop-up blocker.');
  });

export { db, auth, signInWithGoogle };
export default firebase;
