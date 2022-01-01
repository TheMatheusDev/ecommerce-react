import { FormEvent, ChangeEvent, useState, FC } from 'react';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './sign-in.scss';
import { FirebaseError } from 'firebase/app';

const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signOut(auth);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/wrong-password') {
          alert('Wrong password.');
        } else if (error.code === 'auth/user-not-found') {
          alert('An user account with this email does not exist.');
        } else if (error.code === 'auth/internal-error') {
          alert('You must enter a password.');
        } else if (error.code === 'auth/invalid-email') {
          alert('You must enter a valid email.');
        } else {
          console.log(error);
        }
      }
    }

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
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn={true}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
