

export default async function getArtist(artistID: string, token: string) {
  
  const url = `https://api.spotify.com/v1/artists/${artistID}`

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
    return data
  } catch (err) {
    throw err;
  }
}