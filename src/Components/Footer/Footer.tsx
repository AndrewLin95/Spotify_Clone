import { FC, useEffect, useState } from 'react';
import './style.css';
import TimeSlider from './TimeSlider/TimeSlider';
import PlaybackControls from './PlaybackControls/PlaybackControls';
import SpotifyWebPlaybackSDK from '../Spotify/SpotifyWebPlaybackSDK';

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

interface play{
  spotify_uri: any;
  playerInstance: {
      _options: {
          getOAuthToken: any;
          id: any;
      };
  };
}

const Footer:FC<Props> = ({ token, spotifyURI, playlistAlbumKey }) => {
  // activates Spotify Web Playback SDK to trigger player functions
  const { player, deviceID, current_track, is_paused, trackPosition } = SpotifyWebPlaybackSDK(token);

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
      const response = await fetch(url, requestOptions)
      const data = await response.json()
      console.log(data);
    }

    catch (err){
      throw (err);
    }
  }

  // when a track gets clicked, spotifyURI at the app component changes state. this updates and plays the track
  useEffect(() => {
    playTracks(spotifyURI, playlistAlbumKey)
  }, [spotifyURI, playlistAlbumKey])

  return (
    <div id='footerContainer'>
      <div id='footerLeft'>
        
      </div>
      <div id='footerCenter'>
        <div id='footerPlaybackControlsContainer'>
          <PlaybackControls 
            player={player}
            is_paused={is_paused}
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

      </div>
    </div>
  )
}

export default Footer;