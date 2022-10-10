import { FC } from 'react';
import HomePlaylist from './HomePlaylist/HomePlaylist';
import HomeRecommendedArtist from './HomeRecommendedArtist/HomeRecommendedArtist';
import HomeTopArtist from './HomeTopArtist/HomeTopArtist';
import './style.css';

interface Props{
  userPlaylist: SpotifyApi.PlaylistObjectSimplified[],
  userTopArtists: SpotifyApi.ArtistObjectFull[],
  userRecommendedArtists: SpotifyApi.ArtistObjectFull[],
}

const Home: FC<Props> = ({ userPlaylist, userTopArtists, userRecommendedArtists }) => {
  return (
    <div id='homeContainer'>
      <HomePlaylist userPlaylist={userPlaylist}/>
      <HomeTopArtist userTopArtists={userTopArtists} />
      <HomeRecommendedArtist userRecommendedArtists={userRecommendedArtists} />
    </div>
  )
}

export default Home;