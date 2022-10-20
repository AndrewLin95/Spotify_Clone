import { FC, useState, useEffect } from 'react';
import HomePlaylist from './HomePlaylist/HomePlaylist';
import HomeRecommendedArtist from './HomeRecommendedArtist/HomeRecommendedArtist';
import HomeTopArtist from './HomeTopArtist/HomeTopArtist';
import './style.css';

import useHomePageData from '../APICalls/useHomePageData';

interface Props{
  user: SpotifyApi.CurrentUsersProfileResponse,
  handlePlaylistClick: (value: SpotifyApi.PlaylistObjectSimplified) => void,
  handleArtistClick: (artistURI: string) => void,
}

const Home: FC<Props> = ({ user, handlePlaylistClick, handleArtistClick }) => {
  const [userPlaylist, setUserPlaylist] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
  const [userTopArtists, setUserTopArtists] = useState<SpotifyApi.ArtistObjectFull[]>([]);
  const [userRecommendedArtists, setUserRecommendedArtists] = useState<SpotifyApi.ArtistObjectFull[]>([]);

  const { loading, dataHomePage } = useHomePageData(user, userTopArtists);

  useEffect(() => {
    setUserPlaylist(dataHomePage.dataHomePagePlaylist);
    setUserTopArtists(dataHomePage.dataHomePageTopArtist);
    setUserRecommendedArtists(dataHomePage.dataRelatedArtists);
  })

  useEffect(() => {
    console.log('userplayerlist', userPlaylist);
    console.log('userTopArist', userTopArtists);
    console.log('userRecommendedArtists', userRecommendedArtists);
  }, [userPlaylist])

  return (
    <div className='mainContainer'>
      <HomePlaylist userPlaylist={userPlaylist} handlePlaylistClick={handlePlaylistClick}/>
      <HomeTopArtist userTopArtists={userTopArtists} handleArtistClick={handleArtistClick}/>
      <HomeRecommendedArtist userRecommendedArtists={userRecommendedArtists} />
    </div>
  )
}

export default Home;