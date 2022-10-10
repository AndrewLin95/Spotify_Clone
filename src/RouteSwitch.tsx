import { FC, useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { debounce } from 'lodash';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Components/Util/muiThemes';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Home from './Components/Home/Home';
import { getTokenFromUrl, spotifyAPI } from './Components/Spotify/Spotify';

const RouteSwitch: FC = () => {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<SpotifyApi.CurrentUsersProfileResponse>();
  const [auth, setAuth] = useState<boolean>(false);
  const [query, setQuery] = useState<number | string>('');

  const [artist, setArtist] = useState<SpotifyApi.ArtistSearchResponse>();
  const [album, setAlbum] = useState<SpotifyApi.AlbumSearchResponse>();
  const [track, setTrack]= useState<SpotifyApi.TrackSearchResponse>();

  const [userPlaylist, setUserPlaylist] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
  const [userTopArtists, setUserTopArtists] = useState<SpotifyApi.ArtistObjectFull[]>([]);
  const [userRecommendedArtists, setUserRecommendedArtists] = useState<SpotifyApi.ArtistObjectFull[]>([]);

  // on mount, take token from url and store in state to be used for SpotifyAPI authentication
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
       // sets the access token to be used for API calls
      spotifyAPI.setAccessToken(_token);
      spotifyAPI.getMe().then((u) => {
        setUser(u)
      });
    };
  }, []);

  const accessSite = ( authStatus: boolean ) => {
    setAuth(authStatus)
  }

  useEffect(() => {
    async function pullHomePageData() {
      try {
        let response = await Promise.all([
          spotifyAPI.getUserPlaylists(user?.id),
          spotifyAPI.getMyTopArtists(user?.id),
        ]);
        setUserPlaylist(response[0].items);
        setUserTopArtists(response[1].items);
      } catch (err) {
        console.log(err);
      }
    }
    if (token){
      pullHomePageData();
    }
  }, [token])

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
        console.log(err);
      }
    }
    pullRelatedArtists();
  }, [userTopArtists])

  useEffect(() => {
    console.log('userplayerlist', userPlaylist);
    console.log('userTopArist', userTopArtists);
    console.log('userRecommendedArtists', userRecommendedArtists);
  }, [token, userPlaylist, userTopArtists, userRecommendedArtists])

  // when search query is updated, contacts the spotifyAPI endpoints to retrieve artists, albums and tracks
  useEffect(() => {
    async function searchArtist() {
      try {
        let response = await Promise.all([
          spotifyAPI.searchArtists(query.toString()),
          spotifyAPI.searchAlbums(query.toString()),
          spotifyAPI.searchTracks(query.toString())
        ])
        setArtist(response[0]);
        setAlbum(response[1]);
        setTrack(response[2]);
      } catch (err) {
        console.log(err);
      }
    }

    if (query){
      searchArtist();
    }
  }, [query])

  useEffect(() => {
    console.log('artist', artist);
    console.log('album', album);
    console.log('track', track);
  }, [artist])

  // updates the search state with the search parameters after a short debounce
  const handleSearch = (e: number | string) => {
    setQuery(e);
  };

  const debouncedSearch = useMemo(() =>{
    return debounce(handleSearch, 300);
  }, []); 

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {auth? <Header debouncedSearch={debouncedSearch} /> : null}
        <Routes>
          <Route path="" element={<Login token={token} accessSite={accessSite}/>} />
          {auth ? (
            <Route path="/home" element={<Home 
              userPlaylist={userPlaylist} 
              userTopArtists={userTopArtists} 
              userRecommendedArtists={userRecommendedArtists}
            />}/> 
          ) : (
            <Route path="" element={<Login token={token} accessSite={accessSite}/>} /> 
          )}
          {/* page not found route */}
          <Route path="*" element={<Login token={token} accessSite={accessSite}/>} />  
        </Routes>
        {auth? <Footer /> : null}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default RouteSwitch; 