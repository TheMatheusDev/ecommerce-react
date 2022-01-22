import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

const Directory: FC = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionsProps }) => (
        <MenuItem key={id} {...sectionsProps} />
      ))}
    </div>
  );
};

export default Directory;
