import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/header/header';
import LoginRegister from './pages/Login-register/Login-register';
import { auth, createUserProfileDoc, db } from './firebase/firebase.utils';
import { doc, onSnapshot } from 'firebase/firestore';
import './App.scss';

export interface UserWithId {
  id: string;
  displayName: string;
  email: string;
  createdAt: string;
}

const App: FC = () => {
  let [currentUser, setCurrentUser] = useState<UserWithId | null>(null);
  let unsubscribeFromAuth: any = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth?.displayName) {
        await createUserProfileDoc(userAuth);
        const userRef = doc(db, `users/${userAuth.uid}`);

        onSnapshot(userRef, (snapshot) => {
          let userData = snapshot.data();
          if (userData instanceof Object) {
            setCurrentUser({
              id: snapshot.id,
              displayName: userData.displayName,
              email: userData.email,
              createdAt: userData.createdAt,
            });
          } else {
            setCurrentUser(null);
          }
        });
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/signin" element={<LoginRegister />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
