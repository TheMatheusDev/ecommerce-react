import { FC, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth, createUserProfileDoc, db } from './firebase/firebase.utils';
import { doc, onSnapshot } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/header/header';
import LoginRegister from './pages/Login-register/Login-register';
import './App.scss';
import CheckoutPage from './pages/Checkout/Checkout';
import CollectionOverview from './components/collections-overview/collections-overview';

const App: FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

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
        <Route path="/shop" element={<CollectionOverview />}></Route>
        <Route path="/shop/*" element={<ShopPage />}></Route>
        <Route path="/signin" element={currentUser ? <Navigate replace to="/" /> : <LoginRegister />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
