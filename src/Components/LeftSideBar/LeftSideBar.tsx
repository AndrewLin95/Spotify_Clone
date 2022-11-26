import { FC } from 'react';
import { Link } from 'react-router-dom';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

interface Props {
  dataPlaylist: SpotifyApi.PlaylistObjectSimplified[];
  handlePlaylistClick: (value: SpotifyApi.PlaylistObjectSimplified) => void;
}

const LeftSideBar: FC<Props> = ({ dataPlaylist, handlePlaylistClick }) => {
  if (dataPlaylist === null || dataPlaylist === undefined) {
    return null;
  }

  return (
    <div id="LeftSideBarMainContainer">
      <div id="leftSideBarTopContainer">
        <div>
          <Link
            className="homeBtn"
            to="/home"
            style={{ textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={faHouse} /> Home{' '}
          </Link>
        </div>
        <div>
          {/* to add link to search page */}
          <Link
            className="homeBtn"
            to="/search"
            style={{ textDecoration: 'none' }}
          >
            <FontAwesomeIcon id="headerSearchIcon" icon={faMagnifyingGlass} />
            Search
          </Link>
        </div>
      </div>
      <div id="leftSideBarSeperator"></div>
      <div id="leftSideBarPlaylistContainer">
        {Object.entries(dataPlaylist).map(([key, value]) => {
          return (
            <Link to={'/playlist'} key={key} className="leftSideBarPlaylists">
              <div
                className="leftSideBarPlaylistName"
                onClick={() => {
                  handlePlaylistClick(value);
                }}
              >
                {value.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSideBar;
