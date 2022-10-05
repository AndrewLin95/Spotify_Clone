import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import { getTokenFromUrl, loginUrl } from '../Spotify/Spotify';


const Login = () => {
  const [token, setToken] = useState<undefined | string>();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  useEffect(() => {
    console.log("token", typeof(token))
  }, [token])

  switch (typeof(token)) {
    case "undefined":
      return (
        <div id='loginContainer'>
          <img 
            id="spotifyLoginLogo"
            src={`${process.env.PUBLIC_URL}/assets/Spotify_Logo_RGB_Green.png`} 
            alt="spotifylogo"
          />
          <a href={loginUrl}>Login with Spotify</a>
        </div>
      );

      // TODO: create a more intuitive access screen
    case "string":
      return (
        <div id='loginContainer'>
          <img 
            id="spotifyLoginLogo"
            src={`${process.env.PUBLIC_URL}/assets/Spotify_Logo_RGB_Green.png`} 
            alt="spotifylogo"
          />
          <Link className="naveLinks" to="/home">Click here to Access Spotify</Link>
        </div>
      )
  }
}

export default Login;