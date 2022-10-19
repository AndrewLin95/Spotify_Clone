import PlaylistTrackObjectFull from '../Util/modals';

export default async function pullTracks(currPlaylistAlbum_id: string, token: string) {
  let _loadingTracks = true;
  
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
    _loadingTracks = false;

    console.log('data', dataPayload);
    return { _loadingTracks, dataPayload }    

  } catch (err) {
    throw err;
  }
}