import './style.css';
import { loginUrl } from '../Spotify/Spotify';

const Login = () => {
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