import { FC } from 'react';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './style.css';

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div id="headerContainer">
      <div id="headerHomeContainer">
        <Link id="headerHome" to="/home">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
