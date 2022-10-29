import { FC, useState, useEffect } from 'react';
import HomePlaylist from './HomePlaylist/HomePlaylist';
import HomeRecommendedArtist from './HomeRecommendedArtist/HomeRecommendedArtist';
import HomeTopArtist from './HomeTopArtist/HomeTopArtist';
import HomeFeatured from './HomeFeatured/HomeFeatured';
import './style.css';
import { dataHomePageInterface } from '../Util/modals';

interface Props{
  user: SpotifyApi.CurrentUsersProfileResponse,
  handlePlaylistClick: (value: SpotifyApi.PlaylistObjectSimplified) => void,
  handleArtistClick: (artistURI: string) => void,
  dataHomePage: dataHomePageInterface
}

const Home: FC<Props> = ({ user, handlePlaylistClick, handleArtistClick, dataHomePage }) => {
  const [userPlaylist, setUserPlaylist] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
  const [userTopArtists, setUserTopArtists] = useState<SpotifyApi.ArtistObjectFull[]>([]);
  const [userRecommendedArtists, setUserRecommendedArtists] = useState<SpotifyApi.ArtistObjectFull[]>([]);
  const [userFeatured, setUserFeatured] = useState<SpotifyApi.PlaylistObjectSimplified[]>([])

  useEffect(() => {
    setUserPlaylist(dataHomePage.dataHomePagePlaylist);
    setUserTopArtists(dataHomePage.dataHomePageTopArtist);
    setUserRecommendedArtists(dataHomePage.dataRelatedArtists);
    setUserFeatured(dataHomePage.dataFeatured);
  })

  useEffect(() =>{
    console.log(userFeatured);
  }, [userFeatured])

  return (
    <div className='mainContainer'>
      <HomePlaylist userPlaylist={userPlaylist} handlePlaylistClick={handlePlaylistClick}/>
      <HomeTopArtist userTopArtists={userTopArtists} handleArtistClick={handleArtistClick}/>
      <HomeRecommendedArtist userRecommendedArtists={userRecommendedArtists} handleArtistClick={handleArtistClick}/>
      <HomeFeatured userFeatured={userFeatured} handlePlaylistClick={handlePlaylistClick}/>
    </div>
  )
}

export default Home;