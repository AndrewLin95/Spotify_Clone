import { FC, useState, useEffect } from 'react';
import HomePlaylist from './HomePlaylist/HomePlaylist';
import HomeRecommendedArtist from './HomeRecommendedArtist/HomeRecommendedArtist';
import HomeTopArtist from './HomeTopArtist/HomeTopArtist';
import { spotifyAPI } from '../Spotify/Spotify'
import './style.css';

import useHomePageData from '../APICalls/useHomePageData';

interface Props{
  user: SpotifyApi.CurrentUsersProfileResponse,
}

const Home: FC<Props> = ({ user }) => {
  const [userPlaylist, setUserPlaylist] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
  const [userTopArtists, setUserTopArtists] = useState<SpotifyApi.ArtistObjectFull[]>([]);
  const [userRecommendedArtists, setUserRecommendedArtists] = useState<SpotifyApi.ArtistObjectFull[]>([]);

  const { loading: boolean, dataHomePage } = useHomePageData(user);

  useEffect(() => {
    setUserPlaylist(dataHomePage.dataHomePagePlaylist);
    setUserTopArtists(dataHomePage.dataHomePageTopArtist);
  })

  useEffect(() => {
    // retrieves the IDs for the top five user artists into an array
    let topFiveArtistID: string[] = [];
    if (userTopArtists.length != 0) {
      let i = 0;
      while (i < 5){
        topFiveArtistID.push(userTopArtists[i].id);
        i++;
      }
    }

    async function pullRelatedArtists() {
      try{
        // randomizes the top five user artists and returns recommended artists based on the determiend ID
        let response = await spotifyAPI.getArtistRelatedArtists(topFiveArtistID[Math.floor(Math.random()*topFiveArtistID.length)]);
        setUserRecommendedArtists(response.artists);
      } catch (err) {
        throw (err);
      }
    }
    pullRelatedArtists();
  }, [userTopArtists])

  useEffect(() => {
    console.log('userplayerlist', userPlaylist);
    console.log('userTopArist', userTopArtists);
    console.log('userRecommendedArtists', userRecommendedArtists);
  }, [userPlaylist, userTopArtists, userRecommendedArtists])

  return (
    <div id='homeContainer'>
      <HomePlaylist userPlaylist={userPlaylist}/>
      <HomeTopArtist userTopArtists={userTopArtists} />
      <HomeRecommendedArtist userRecommendedArtists={userRecommendedArtists} />
    </div>
  )
}

export default Home;