import { FC } from 'react';
import './style.css';

interface Props{
  userPlaylist: SpotifyApi.PlaylistObjectSimplified[]
}

const Home: FC<Props> = ({ userPlaylist }) => {
  return (
    <div id="homeContainer">
      {Object.entries(userPlaylist).map(([key, value]) => {
        return(
          <div key={key}>
            {value.name}
          </div>
        )
      })}
    </div>
  )
}

export default Home;