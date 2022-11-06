import { tracksInterfaceAlbum } from '../Util/modals';

export default async function getRecommendationAlbum( token: string, albumTracks: tracksInterfaceAlbum[] ) {

  const url = `https://api.spotify.com/v1/artists/${albumTracks[0].album}/albums`

  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }

  try{
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }

}