import { FC, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Home from './Components/Home/Home';
import { getTokenFromUrl } from './Components/Spotify/Spotify'

// TODO: IF token is unidentified, route user back to login screen

const RouteSwitch: FC = () => {
  const [token, setToken] = useState<string>();
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  const accessSite = ( authStatus: boolean ) => {
    setAuth(authStatus)
  }

  return (
    <BrowserRouter>
        {auth? <Header /> : null}
        <Routes>
          <Route path="" element={<Login token={token} accessSite={accessSite}/>} />
          <Route path="/home" element={<Home />}/>
          {/* page not found route */}
          <Route path="*" element={<Login token={token} accessSite={accessSite}/>} />  
        </Routes>
        {auth? <Footer /> : null}
    </BrowserRouter>
  )
}

export default RouteSwitch;