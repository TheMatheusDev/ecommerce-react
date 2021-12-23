import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/header/header';
import LoginRegister from './pages/Login-register/Login-register';
import { auth } from './firebase/firebase.utils';
import './App.scss';
import { User } from 'firebase/auth';

const App: FC = () => {
  let [currentUser, setCurrentUser] = useState<User | null>(null);
  let unsubscribeFromAuth: any = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
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
