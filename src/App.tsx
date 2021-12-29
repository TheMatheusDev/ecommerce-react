import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth, createUserProfileDoc, db } from './firebase/firebase.utils';
import { doc, onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/header/header';
import LoginRegister from './pages/Login-register/Login-register';
import './App.scss';

export interface UserWithId {
  id: string;
  displayName: string;
  email: string;
  createdAt: string;
}

const App: FC = () => {
  const dispatch = useDispatch();
  let unsubscribeFromAuth: any;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth?.displayName) {
        await createUserProfileDoc(userAuth);
        const userRef = doc(db, `users/${userAuth.uid}`);

        onSnapshot(userRef, (snapshot) => {
          let userData = snapshot.data();
          if (userData instanceof Object) {
            let user = {
              id: snapshot.id,
              displayName: userData.displayName,
              email: userData.email,
              createdAt: userData.createdAt,
            };
            dispatch(setCurrentUser(user));
          }
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/signin" element={<LoginRegister />}></Route>
      </Routes>
    </>
  );
};

export default App;
