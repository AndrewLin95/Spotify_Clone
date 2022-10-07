import { FC, useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import { loginUrl } from '../Spotify/Spotify'

interface Props{
  token: undefined | string;
  accessSite: (authStatus: boolean) => void;
}

const Login:FC <Props> = ({ token, accessSite }) => {
  switch (typeof(token)) {
    case "undefined":
      return (
        <div id='loginContainer'>
          <img 
            id="spotifyLoginLogo"
            src={`${process.env.PUBLIC_URL}/assets/Spotify_Logo_RGB_Green.png`} 
            alt="spotifylogo"
          />
          <a className="loginBtn" href={loginUrl}>Login with Spotify</a>
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
          <Link onClick={() => {accessSite(true)}} className="loginBtn access" to="/home">Click here to Access Spotify</Link>
        </div>
      )
  }
}

export default Login;