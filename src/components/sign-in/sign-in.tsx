import { FormEvent, ChangeEvent, useState, FC } from 'react';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.scss';

const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput type="email" handleChange={handleChange} name="email" value={email} label="Email" required={true} />
        <FormInput
          type="password"
          handleChange={handleChange}
          name="password"
          value={password}
          label="Password"
          required={true}
        />
        <div className="buttons">
          <CustomButton type="submit" isGoogleSignIn={false}>
            SIGN IN
          </CustomButton>
          <CustomButton signIn={signInWithGoogle} isGoogleSignIn={true}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
