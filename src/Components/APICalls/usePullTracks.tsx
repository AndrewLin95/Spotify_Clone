import { useState, useEffect } from 'react';

const usePullTracks = (currPlaylistAlbum: SpotifyApi.PlaylistObjectSimplified, token: string ) => {
  const [_loadingTracks, setLoadingTracks] = useState(true);
  const pagingObject = {} as SpotifyApi.PagingObject<SpotifyApi.PlaylistTrackObject>
  const [dataTracks, setDataTracks] = useState<SpotifyApi.PagingObject<SpotifyApi.PlaylistTrackObject>>(pagingObject);

  async function pullTracks() {
    const url = `https://api.spotify.com/v1/playlists/${currPlaylistAlbum.id}/tracks`;
    
    const requestOptions = {
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        }
    }

    try {
      const response = await fetch(url, requestOptions)
      const data = await response.json();
      setDataTracks(data);
      setLoadingTracks(false);
      console.log(data);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    pullTracks();
  }, [])

  return { _loadingTracks, dataTracks }
}

export default usePullTracks;