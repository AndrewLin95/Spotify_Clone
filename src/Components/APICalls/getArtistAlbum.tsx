
export default async function getArtistAlbum(artistID: string, token:string ) {
  
  const url = `https://api.spotify.com/v1/artists/${artistID}/albums?limit=50&market=CA`;

  const requestOptions = {
    method: 'GET', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }

  // manage the data:
  // 1) sort by earliest to oldest as default
  // 2) filter by Albums, Singles, Other

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
}