import { FC } from 'react';
import './style.css';
import { loginUrl } from '../Spotify/Spotify';

interface Props{
  handleLogin: () => void;
}

const Login: FC<Props> = ({ handleLogin }) => {
  return (
    <div id='loginContainer'>
      <img 
        id="spotifyLoginLogo"
        src={`${process.env.PUBLIC_URL}/assets/Spotify_Logo_RGB_Green.png`} 
        alt="spotifylogo"
      />
      <a onClick={handleLogin} href={loginUrl}>Login with Spotify</a>
    </div>
  )
}

export default Login;