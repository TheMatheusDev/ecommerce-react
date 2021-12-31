import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { FC } from 'react';
import { auth } from '../../firebase/firebase.utils';
import { UserWithId } from '../../App';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import './header.scss';

export interface IState {
  user: {
    currentUser: UserWithId | null;
  };
  cart: {
    hidden: boolean;
  };
}

const Header: FC = () => {
  const currentUser = useSelector(({ user: { currentUser } }: IState) => currentUser);
  const currentHidden = useSelector(({ cart: { hidden } }: IState) => hidden);

  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <nav className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT {currentUser.displayName}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </nav>
      {currentHidden ? null : <CartDropdown />}
    </header>
  );
};

export default Header;
