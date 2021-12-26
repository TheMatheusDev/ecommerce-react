import { ButtonHTMLAttributes, FC, HTMLProps, MouseEvent, MouseEventHandler } from 'react';
import './custom-button.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn: boolean;
  signIn?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: FC<IProps> = ({ children, isGoogleSignIn, type, signIn }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} type={type} onClick={signIn}>
    {children}
  </button>
);

export default CustomButton;
