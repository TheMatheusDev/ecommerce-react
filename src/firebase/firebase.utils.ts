import { initializeApp } from 'firebase/app';
import { setDoc, doc, getFirestore, getDoc, DocumentReference, DocumentData } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
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
    let { displayName, email } = userAuth;
    if (displayName != undefined && displayName != null) {
      displayName = displayName.trim();
    }
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
