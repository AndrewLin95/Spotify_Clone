import { FC } from 'react';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './style.css';

interface Props{
  debouncedSearch: (e: number | string) => void;
  testFunction: () => void;
}

const Header: FC<Props> = ({ debouncedSearch, testFunction }) => {

  return (
    <div id='headerContainer'>
      <div  id='headerHomeContainer'>
        <Link id='headerHome' to="/home"><FontAwesomeIcon icon={faHouse} /></Link>
      </div>
      <div id='headerSearchContainer'>
        <FontAwesomeIcon id='headerSearchIcon' icon={faMagnifyingGlass} />
        <input onChange={(e) => {debouncedSearch(e.target.value)}} id='headerSearchInput' placeholder='What do you want to listen to?'></input>
        <button onClick={testFunction}> Test </button>
      </div>
    </div>
  )
}

export default Header;