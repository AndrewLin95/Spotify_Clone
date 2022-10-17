import { FC, useEffect, useState } from 'react';
import './style.css';
import TimeSlider from './TimeSlider/TimeSlider';
import PlaybackControls from './PlaybackControls/PlaybackControls';
import { spotifyAPI } from '../Spotify/Spotify';

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
  const [player, setPlayer] = useState<any>(undefined);
  const [deviceID, setDeviceID] = useState(undefined);


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb: any) => { cb(token) },
        volume: 0.2
      });

      setPlayer(player);
 
      player.addListener('ready', ({ device_id }: any) => {
          console.log('Ready with Device ID', device_id);
          setDeviceID(device_id);
          
          // const play = ({
          //   spotify_uri,
          //   playerInstance: {
          //     _options: {
          //       getOAuthToken
          //     }
          //   }
          // }: play) => {
          //   getOAuthToken((token: string) => {
          //     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
          //       method: 'PUT',
          //       body: JSON.stringify({ uris: [spotify_uri] }),
          //       headers: {
          //         'Content-Type': 'application/json',
          //         'Authorization': `Bearer ${token}`
          //       },
          //     });
          //   });
          // };

          // play({
          //   playerInstance: player,
          //   spotify_uri: "spotify:playlist:4U1fWzFgfHM67rKSJijuHL",
          // });
      });

      player.addListener('not_ready', ({ device_id }: any) => {
          console.log('Device ID has gone offline', device_id);
      });

      // player.addListener('player_state_changed', ( (state: any) => {

      //     if (!state) {
      //         return;
      //     }

      //     setTrack(state.track_window.current_track);
      //     setPaused(state.paused);

      //     player.getCurrentState().then( (state:any) => { 
      //         (!state)? setActive(false) : setActive(true) 
      //     });
      // }));
      player.connect();
    }
  }, [])
   
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