import { FC } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

interface Props{
  dataPlaylist: SpotifyApi.PlaylistObjectSimplified[],
  handlePlaylistClick: (value: SpotifyApi.PlaylistObjectSimplified) => void;
}

const LeftSideBar: FC<Props> = ({dataPlaylist, handlePlaylistClick}) => {
  return (
    <div id="LeftSideBarMainContainer">
      <div id='leftSideBarSeperator'></div>
      <div id='leftSideBarPlaylistContainer'>
        {Object.entries(dataPlaylist).map(([key, value]) => {
          return (
            <Link to={'/playlist'} key={key} style={{textDecoration: 'none'}}>
              <div className='leftSideBarPlaylistName' onClick={() => {handlePlaylistClick(value)}} > 
                {value.name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default LeftSideBar;