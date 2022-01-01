import { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react';
import './custom-button.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: FC<IProps> = ({ children, isGoogleSignIn, inverted, type, onClick }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
