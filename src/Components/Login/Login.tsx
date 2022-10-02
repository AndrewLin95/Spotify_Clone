import './style.css';

const Login = () => {
  return (
    <div id='loginContainer'>
      <img 
        id="spotifyLoginLogo"
        src={`${process.env.PUBLIC_URL}/assets/Spotify_Logo_RGB_Green.png`} 
        alt="spotifylogo"
      />
      <button id='loginBtn' type="button">Login with Spotify</button>
    </div>
  )
}

export default Login;