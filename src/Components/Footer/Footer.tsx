import { FC, useEffect, useState } from 'react';
import './style.css';
import TimeSlider from './TimeSlider/TimeSlider';
import PlaybackControls from './PlaybackControls/PlaybackControls';
import { spotifyAPI } from '../Spotify/Spotify';
import SpotifyWebPlaybackSDK from '../Spotify/SpotifyWebPlaybackSDK';

declare global {
  interface Window { 
    onSpotifyWebPlaybackSDKReady: any; 
    Spotify: any;
  }
}

interface Props {
  token: string,
  currTrack: string,
}

interface play{
  spotify_uri: any;
  playerInstance: {
      _options: {
          getOAuthToken: any;
          id: any;
      };
  };
}

const Footer:FC<Props> = ({ token, currTrack }) => {
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);

  const { player, deviceID } = SpotifyWebPlaybackSDK(token);
  
  async function playTracks() {
    const url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceID}`
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        'context_uri': 'spotify:playlist:4U1fWzFgfHM67rKSJijuHL',
        'offset': {
          'position': 1
        },
        "position_ms": 0
      })
    };
    try{
      const response = await fetch(url, requestOptions)
      const data = await response.json()
      console.log(data);
    }
    catch (err){
      throw (err);
    }
  }


  useEffect(()=>{
    playTracks();
  }, [player, currTrack])

  const handleNextTrack = () => {
    player.nextTrack().then(() => {
      console.log('Next Track');
    })
  }

  useEffect(() => {
    console.log(currTrack);
  }, [currTrack])

  useEffect(() => {
    console.log('token', token)
  }, [])

  return (
    <div id='footerContainer'>
      <div id='footerLeft'>
        
      </div>
      <div id='footerCenter'>
        <div id='footerPlaybackControlsContainer'>
          <PlaybackControls 
            handleNextTrack={handleNextTrack}
          />
          <button onClick={() => { player.nextTrack() }}>TEST</button>
        </div>
        <div id='footerTimeSliderContainer'>
          <div className='footerCurrTime'></div>
          <div className='footerTimeSlider'>
            <TimeSlider />
            </div>
          <div className='footerTotalTime'></div>
        </div>
      </div>
      <div id='footerRight'>

      </div>
    </div>
  )
}

export default Footer;