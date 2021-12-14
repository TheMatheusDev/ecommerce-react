import { FC } from 'react';
import './Homepage.scss';
import Directory from '../../components/directory/directory';

const Homepage: FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
