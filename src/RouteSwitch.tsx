import { FC, useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { debounce } from 'lodash';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Home from './Components/Home/Home';
import { getTokenFromUrl, spotifyAPI } from './Components/Spotify/Spotify';

const RouteSwitch: FC = () => {
  const [token, setToken] = useState<string>();
  const [auth, setAuth] = useState<boolean>(false);
  const [query, setQuery] = useState<number | string>();
  const [searchParam, setSearchParam] = useState<number | string>();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    // sets the access token to be used for API calls
    spotifyAPI.setAccessToken(`${token}`);
  }, []);

  const accessSite = ( authStatus: boolean ) => {
    setAuth(authStatus)
  }

  async function testFunction() {
    try {
      const response = await spotifyAPI.searchArtists('Love');
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

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

  useEffect(() => {
    console.log(`query: ${query}`);
  }, [query])

  return (
    <BrowserRouter>
        {auth? <Header debouncedSearch={debouncedSearch} testFunction={testFunction} /> : null}
        <Routes>
          <Route path="" element={<Login token={token} accessSite={accessSite}/>} />
          {auth ? (
            <Route path="/home" element={<Home />}/> 
          ) : (
            <Route path="" element={<Login token={token} accessSite={accessSite}/>} /> 
          )}
          {/* page not found route */}
          <Route path="*" element={<Login token={token} accessSite={accessSite}/>} />  
        </Routes>
        {auth? <Footer /> : null}
    </BrowserRouter>
  )
}

export default RouteSwitch; 