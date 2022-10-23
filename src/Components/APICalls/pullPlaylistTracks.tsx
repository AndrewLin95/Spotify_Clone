import { tracksInterface } from '../Util/modals';

export default async function pullPlaylistTracks(currPlaylistAlbum_id: string, token: string, currPlaylistAlbum_type:string) {
  let _loadingTracks = true;
  
  const url = `https://api.spotify.com/v1/${currPlaylistAlbum_type}s/${currPlaylistAlbum_id}/tracks`;
  
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
    const data: any = await response.json();

    let dataPayload = data.items;
    let numTracks = 100;
    let nextUrl = data.next;

    while (data.total > numTracks) {
      const response = await fetch(nextUrl, requestOptions)
      const data: any = await response.json();
      nextUrl = data.next;
      dataPayload.push(...data.items);
      numTracks += 100;
    }
    let transformedData
    if (currPlaylistAlbum_type === 'playlist'){
      transformedData = dataPayload.map((value:any) => {
        return {
          addedDate: value.added_at,
          trackDuration: value.track.duration_ms,
          albumImg: value.track.album.images[1].url,
          trackName: value.track.name,
          artistName: value.track.artists[0].name,
          album: value.track.album
        }
      })
    } else if (currPlaylistAlbum_type === 'album'){
      transformedData = dataPayload.map((value:any) => {
        return {
          addedDate: undefined,
          trackDuration: value.duration_ms,
          albumImg: undefined,
          trackName: value.name,
          artistName: value.artists[0].name,
          album: value.artists[0].id,
        }
      })
    };

    _loadingTracks = false;

    return { _loadingTracks, transformedData }    

  } catch (err) {
    throw err;
  }
}