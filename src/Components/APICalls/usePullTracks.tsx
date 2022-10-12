import { useState, useEffect } from 'react';

const usePullTracks = (currPlaylistAlbum: SpotifyApi.PlaylistObjectSimplified, token: string ) => {
  const [loadingTracks, setLoadingTracks] = useState(true);
  const [dataTracks, setDataTracks] = useState();

  async function pullTracks() {
    const requestOptions = {
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        }
    }

    const url = `https://api.spotify.com/v1/playlists/${currPlaylistAlbum.id}/tracks`

    try {
      const response = await fetch(url, requestOptions)
      const data = await response.json();
      setDataTracks(data);
      console.log(data);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    pullTracks();
  }, [])

  return { loadingTracks, dataTracks }
}

export default usePullTracks;