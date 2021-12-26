import './Login-register.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import { FC } from 'react';

const LoginRegister: FC = () => (
  <div className="login-register">
    <SignIn />
    <SignUp />
  </div>
);

export default LoginRegister;
