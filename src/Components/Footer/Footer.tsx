import { FC, useEffect, useState } from 'react';
import './style.css';
import TimeSlider from './TimeSlider/TimeSlider';
import PlaybackControls from './PlaybackControls/PlaybackControls';
import FooterLeft from './FooterLeft/FooterLeft';
import FooterRight from './FooterRight/FooterRight';
import SpotifyWebPlaybackSDK from '../Spotify/SpotifyWebPlaybackSDK';
import putPlaybackShuffle from '../APICalls/putPlaybackShuffle';
import putRepeatState from '../APICalls/putRepeatState';

declare global {
  interface Window { 
    onSpotifyWebPlaybackSDKReady: any; 
    Spotify: any;
  }
}

interface Props {
  token: string,
  spotifyURI: string,
  playlistAlbumKey: string,
}

const _repeatState = {
  OFF: 'off',
  CONTEXT: 'context',
  TRACK: 'track',
}

const Footer:FC<Props> = ({ token, spotifyURI, playlistAlbumKey }) => {
  // activates Spotify Web Playback SDK to trigger player functions
  const { player, deviceID, current_track, is_paused, trackPosition } = SpotifyWebPlaybackSDK(token);

  const [shuffleState, setShuffleState] = useState(false);
  const [repeatState, setRepeatState] = useState(_repeatState.OFF);

  async function playTracks(_spotifyURI: string, _playlistAlbumKey:string,) {
    const url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceID}`
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        'context_uri': _spotifyURI,
        'offset': {
          'position': _playlistAlbumKey
        },
        "position_ms": 0
      })
    };

    try{
      await fetch(url, requestOptions)
    }

    catch (err){
      throw (err);
    }
  }

  // when a track gets clicked, spotifyURI at the app component changes state. this updates and plays the track
  useEffect(() => {
    if (deviceID === '') {
      return;
    }
    playTracks(spotifyURI, playlistAlbumKey)
  }, [spotifyURI, playlistAlbumKey])

  const handleShuffleState = () => {
    putPlaybackShuffle(!shuffleState, token, deviceID);
    setShuffleState(!shuffleState);
  }

  const handleRepeatState = () => {
    let newRepeatState = ''
    switch (repeatState) {
      case _repeatState.OFF:
        newRepeatState = _repeatState.CONTEXT
        break;
      case _repeatState.CONTEXT:
        newRepeatState = _repeatState.TRACK
        break;
      case _repeatState.TRACK:
        newRepeatState = _repeatState.OFF
        break;
    }
   
    putRepeatState(newRepeatState, deviceID, token);
    setRepeatState(newRepeatState);
  }

  return (
    <div id='footerContainer'>
      <div id='footerLeft'>
        <FooterLeft current_track={current_track}/>
      </div>
      <div id='footerCenter'>
        <div id='footerPlaybackControlsContainer'>
          <PlaybackControls 
            player={player}
            is_paused={is_paused}
            handleShuffleState={handleShuffleState}
            shuffleState={shuffleState}
            handleRepeatState={handleRepeatState}
            repeatState={repeatState}
          />
        </div>
        <div id='footerTimeSliderContainer'>
          <div className='footerCurrTime'></div>
          <div className='footerTimeSlider'>
            <TimeSlider 
              is_paused={is_paused} 
              trackPosition={trackPosition} 
              current_track={current_track}
              token={token}
            />
            </div>
          <div className='footerTotalTime'></div>
        </div>
      </div>
      <div id='footerRight'>
        <FooterRight 
          player={player}
        />
      </div>
    </div>
  )
}

export default Footer;