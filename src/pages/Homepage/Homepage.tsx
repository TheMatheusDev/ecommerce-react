import './Homepage.scss';
import Directory from '../../components/directory/directory';
import { FC } from 'react';

const Homepage: FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
