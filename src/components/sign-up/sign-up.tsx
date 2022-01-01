import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

import './sign-up.scss';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';
import { FirebaseError } from 'firebase/app';

const SignUp: FC = () => {
  const [state, setState] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });
  const { displayName, email, password, confirmPassword } = state;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'displayName':
        setState((prevState) => ({ ...prevState, displayName: value }));
        break;

      case 'email':
        setState((prevState) => ({ ...prevState, email: value }));
        break;

      case 'password':
        setState((prevState) => ({ ...prevState, password: value }));
        break;

      case 'confirmPassword':
        setState((prevState) => ({ ...prevState, confirmPassword: value }));
        break;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (displayName.length < 3) {
      alert('Your display name is too short.');
      return;
    } else if (email.length <= 5) {
      alert('Your email is too short.');
      return;
    } else if (password.length <= 5 || confirmPassword.length <= 5) {
      alert('Your password is too short. Passwords must have at least 6 characters long.');
      return;
    } else if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: displayName.trim() });

      await createUserProfileDoc(user);
      setState({ displayName: '', email: '', password: '', confirmPassword: '' });
    } catch (error) {
      if (error instanceof FirebaseError) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          handleChange={handleChange}
          name="displayName"
          value={displayName}
          label="Display Name"
          required={true}
        />
        <FormInput type="email" handleChange={handleChange} name="email" value={email} label="Email" required={true} />
        <FormInput
          type="password"
          handleChange={handleChange}
          name="password"
          value={password}
          label="Password"
          required={true}
        />
        <FormInput
          type="password"
          handleChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required={true}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
