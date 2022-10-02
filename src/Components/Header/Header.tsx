import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Header = () => {

  return (
    <div id='headerContainer'>
      <FontAwesomeIcon icon={faHouse} />
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input></input>
      </div>
    </div>
  )
}

export default Header;