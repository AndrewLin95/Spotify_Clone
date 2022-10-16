import { FC, useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { debounce } from 'lodash';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Components/Util/muiThemes';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Home from './Components/Home/Home';
import { spotifyAPI } from './Components/Spotify/Spotify';

import useRetrieveToken from './Components/Util/useRetrieveToken';
import Playlists from './Components/Music/Playlists';

const App: FC = () => {
  const [token, setToken] = useState<any>();
  // TODO: fix the any type for user (SpotifyApi.CurrentUsersProfileResponse)
  const [user, setUser] = useState<any>();
  const [auth, setAuth] = useState<boolean>(false);
  const [query, setQuery] = useState<number | string>('');

  const currPlaylistInterface = {} as SpotifyApi.PlaylistObjectSimplified
  const [currPlaylistAlbum, setCurrPlaylistAlbum] = useState<SpotifyApi.PlaylistObjectSimplified>(currPlaylistInterface);

  const [currTrack, setCurrTrack] = useState();

  const [artist, setArtist] = useState<SpotifyApi.ArtistSearchResponse>();
  const [album, setAlbum] = useState<SpotifyApi.AlbumSearchResponse>();
  const [track, setTrack]= useState<SpotifyApi.TrackSearchResponse>();

  // on mount, take token from url and store in state to be used for SpotifyAPI authentication
  useEffect(() => {
    const _token = useRetrieveToken();

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

  // handles playlist click from Home page
  const handlePlaylistAlbumClick = (value: SpotifyApi.PlaylistObjectSimplified) => {
    setCurrPlaylistAlbum(value);
    console.log('testValue', value);
  }


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {auth? <Header debouncedSearch={debouncedSearch} /> : null}
        <Routes>
          <Route path="" element={<Login token={token} accessSite={accessSite}/>} />
          {auth ? (
            <>
              <Route path="/home" element={<Home user={user} handlePlaylistAlbumClick={handlePlaylistAlbumClick}/>}/> 
              <Route path="/playlist" element={<Playlists currPlaylistAlbum={currPlaylistAlbum} token={token} />} />
            </>
          ) : (
            <Route path="" element={<Login token={token} accessSite={accessSite}/>} /> 
          )}
          {/* page not found route */}
          <Route path="*" element={<Login token={token} accessSite={accessSite}/>} />  
        </Routes>
        {auth? <Footer token={token}/> : null}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App; 