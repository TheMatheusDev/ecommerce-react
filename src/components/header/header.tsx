import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/084 crown.svg';
import { FC } from 'react';
import { auth } from '../../firebase/firebase.utils';
import { UserWithId } from '../../App';
import { connect, DefaultRootState, useSelector } from 'react-redux';

export interface IState {
  user: {
    currentUser: UserWithId | null;
  };
}

const Header: FC = () => {
  const currentUser = useSelector((state: IState) => state.user.currentUser);

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
      </nav>
    </header>
  );
};

export default Header;
