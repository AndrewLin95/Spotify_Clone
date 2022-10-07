import { FC } from 'react';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './style.css';

interface Props{
  testFunction: () => void
}

const Header: FC<Props> = ({ testFunction }) => {

  return (
    <div id='headerContainer'>
      <div  id='headerHomeContainer'>
        <Link id='headerHome' to="/home"><FontAwesomeIcon icon={faHouse} /></Link>
      </div>
      <div id='headerSearchContainer'>
        <FontAwesomeIcon id='headerSearchIcon' icon={faMagnifyingGlass} />
        <input id='headerSearchInput' placeholder='What do you want to listen to?'></input>
        <button onClick={testFunction}> Test </button>
      </div>
    </div>
  )
}

export default Header;