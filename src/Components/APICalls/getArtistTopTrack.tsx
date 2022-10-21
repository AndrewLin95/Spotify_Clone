export default async function getArtistTopTrack(artistID: string, token: string) {
  
  const url = `https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=CA`

  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    // format data to the tracksInterfaceAlbum. then it can be injected into the MusicTracksItem
    // trackDuration: number,
    // trackName: string,
    // artistName: string,

    return data;
  } catch (err) {
    throw err;
  }
}