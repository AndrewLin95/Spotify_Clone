import { FC, useEffect, useState } from 'react';
import './style.css';
import { getTokenFromUrl, loginUrl } from '../Spotify/Spotify';

const Login: FC = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("token", token);
  }, []);

  return (
    <div id='loginContainer'>
      <img 
        id="spotifyLoginLogo"
        src={`${process.env.PUBLIC_URL}/assets/Spotify_Logo_RGB_Green.png`} 
        alt="spotifylogo"
      />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  )
}

export default Login;