import { FC } from 'react';
import Stack from '@mui/material/Stack';
import './style.css';

interface Props{
  userPlaylist: SpotifyApi.PlaylistObjectSimplified[]
}

const Home: FC<Props> = ({ userPlaylist }) => {
  return (
    <div>
      <div id='homeAlbumHeader'>Albums</div>
      <div id="homeContainer">
        {Object.entries(userPlaylist).map(([key, value]) => {
          return(
            <div className='homeAlbumContainer' key={key}>
              <img className='homeAlbumImage' src={value.images[0].url}></img>
              <div className='homeAlbumText'>{value.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home;