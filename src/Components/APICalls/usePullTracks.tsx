import { useState, useEffect } from 'react';
import PlaylistTrackObjectFull from '../Util/modals';

const usePullTracks = (currPlaylistAlbum_id: string, token: string ) => {
  const [_loadingTracks, setLoadingTracks] = useState(true);
  const pagingObject = {} as PlaylistTrackObjectFull[]
  const [dataTracks, setDataTracks] = useState<PlaylistTrackObjectFull[]>(pagingObject);

  async function pullTracks() {
    const url = `https://api.spotify.com/v1/playlists/${currPlaylistAlbum_id}/tracks`;
    
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
      const data: SpotifyApi.PagingObject<PlaylistTrackObjectFull> = await response.json();

      let dataPayload = data.items;
      let numTracks = 100;
      let nextUrl = data.next;

      while (data.total > numTracks) {
        const response = await fetch(nextUrl, requestOptions)
        const data: SpotifyApi.PagingObject<PlaylistTrackObjectFull> = await response.json();
        nextUrl = data.next;
        dataPayload.push(...data.items);
        numTracks += 100;
      }

      setDataTracks(dataPayload);
      setLoadingTracks(false);
      console.log('data', dataPayload);
      
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