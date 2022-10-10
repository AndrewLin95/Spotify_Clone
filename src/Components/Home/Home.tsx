import { FC } from 'react';
import HomePlaylist from './HomePlaylist/HomePlaylist';
import HomeTopArtist from './HomeTopArtist/HomeTopArtist'

interface Props{
  userPlaylist: SpotifyApi.PlaylistObjectSimplified[],
  userTopArtists: SpotifyApi.ArtistObjectFull[]
}

const Home: FC<Props> = ({ userPlaylist, userTopArtists }) => {
  return (
    <div id='homeContainer'>
      <HomePlaylist userPlaylist={userPlaylist}/>
      <HomeTopArtist userTopArtists={userTopArtists} />
    </div>
  )
}

export default Home;