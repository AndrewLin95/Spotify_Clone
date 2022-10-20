import { useState, useEffect } from 'react';
import WebPlaybackTrack from '../Util/modals';

const SpotifyWebPlaybackSDK = ( token: any ) => {
  const [player, setPlayer] = useState<any>(undefined);
  const [deviceID, setDeviceID] = useState<string>('');

  const [current_track, setTrack] = useState();
  const [is_paused, setPaused] = useState(true);
  const [is_active, setActive] = useState(false);

  const [trackPosition, setTrackPosition] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: `Spotify Clone`,
        getOAuthToken: (cb: any) => { cb(token) },
        volume: 0.2
      });
  
      setPlayer(player);
  
      player.addListener('ready', ({ device_id }: any) => {
          console.log('Ready with Device ID', device_id);
          setDeviceID(device_id);
      });
  
      player.addListener('not_ready', ({ device_id }: any) => {
          console.log('Device ID has gone offline', device_id);
      });
  
      player.addListener('player_state_changed', ( (state: WebPlaybackTrack) => {
        if (!state) {
            return;
        }

        setTrack(state.track_window.current_track);
        setPaused(state.paused);
        setTrackPosition(state.position);

        player.getCurrentState().then( (state: any) => { 
            (!state)? setActive(false) : setActive(true) 
        });
      }));
      player.connect();

      return () => {
        player.disconnect();
      }
    }
  }, [])

  return { player, deviceID, current_track, is_paused, trackPosition};
}

export default SpotifyWebPlaybackSDK;