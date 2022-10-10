import { FC } from 'react';
import HomePlaylist from './HomePlaylist/HomePlaylist';
import HomeTopArtist from './HomeTopArtist/HomeTopArtist';
import HomeRecentlyPlayedTrack from './HomeRecentlyPlayedTrack/HomeRecentlyPlayedTrack';
import './style.css';

interface Props{
  userPlaylist: SpotifyApi.PlaylistObjectSimplified[],
  userTopArtists: SpotifyApi.ArtistObjectFull[],
  userRecentlyPlayedTrack: SpotifyApi.PlayHistoryObject[]
}

const Home: FC<Props> = ({ userPlaylist, userTopArtists, userRecentlyPlayedTrack }) => {
  return (
    <div id='homeContainer'>
      <HomePlaylist userPlaylist={userPlaylist}/>
      <HomeTopArtist userTopArtists={userTopArtists} />
      <HomeRecentlyPlayedTrack userRecentlyPlayedTrack={userRecentlyPlayedTrack} />
    </div>
  )
}

export default Home;