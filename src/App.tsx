import { FC, useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { debounce } from 'lodash';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Components/Util/muiThemes';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Home from './Components/Home/Home';
import Artists from './Components/Artists/Artists';
import { spotifyAPI } from './Components/Spotify/Spotify';
import { currPlaylistAlbumInterface } from './Components/Util/modals'

import useRetrieveToken from './Components/Util/useRetrieveToken';
import Playlists from './Components/Music/Playlists';

const App: FC = () => {
  const [token, setToken] = useState<any>();
  // TODO: fix the any type for user (SpotifyApi.CurrentUsersProfileResponse)
  const [user, setUser] = useState<any>();
  const [auth, setAuth] = useState<boolean>(false);
  const [query, setQuery] = useState<number | string>('');

  const currPlaylistInterface = {} as currPlaylistAlbumInterface
  const [currPlaylistAlbum, setCurrPlaylistAlbum] = useState<any>({currPlaylistInterface});

  const [spotifyURI, setSpotifyURI] = useState<string>('');
  const [playlistAlbumKey, setPlaylistAlbumKey] = useState<string>('');

  const [artistID, setArtistID] = useState<string>('');

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

  const handleTrackPress = (spotifyURI: string, key: string) => {
    setSpotifyURI(spotifyURI);
    setPlaylistAlbumKey(key);
    console.log('playlistalbumkey', key);
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
  const handlePlaylistClick = (value: SpotifyApi.PlaylistObjectSimplified) => {
    setCurrPlaylistAlbum({
      image: value.images[0].url,
      type: value.type,
      name: value.name,
      owner_name: value.owner.display_name,
      totalTracks: value.tracks.total,
      uri: value.uri,
      urlID: value.id,
    });
    console.log('testValue PLAYLIST', value);
  };

  // TODO: Interface for value below
  const handleAlbumClick = (value: any) => {
    console.log('testValue ALBUM', value);
    setCurrPlaylistAlbum({
      image: value.images[0].url,
      type: value.type,
      name: value.name,
      owner_name: value.artists[0].name,
      totalTracks: value.total_tracks,
      uri: value.uri,
      urlID: value.id
    })
  };

  const handleArtistClick = (artistID: string) => {
    setArtistID(artistID);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {auth? <Header debouncedSearch={debouncedSearch} /> : null}
        <Routes>
          <Route path="" element={<Login token={token} accessSite={accessSite}/>} />
          {auth ? (
            <>
              <Route path="/home" element={
                <Home 
                  user={user} 
                  handlePlaylistClick={handlePlaylistClick}
                  handleArtistClick={handleArtistClick}
                />}
              /> 
              <Route path="/playlist" element={
                <Playlists 
                  currPlaylistAlbum={currPlaylistAlbum} 
                  token={token} 
                  handleTrackPress={handleTrackPress} 
                  handleAlbumClick={handleAlbumClick}
                />} 
              />
              <Route path='/artists' element={
                <Artists 
                  artistID={artistID}
                  token={token} 
                />
              }/>
            </>
          ) : (
            <Route path="" element={<Login token={token} accessSite={accessSite}/>} /> 
          )}
          {/* page not found route */}
          <Route path="*" element={<Login token={token} accessSite={accessSite}/>} />  
        </Routes>
        {auth? <Footer token={token} spotifyURI={spotifyURI} playlistAlbumKey={playlistAlbumKey}/> : null}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App; 