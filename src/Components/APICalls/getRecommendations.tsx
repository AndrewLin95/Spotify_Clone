import { tracksInterface } from "../Util/modals";

export default async function getRecommendations(token: string, tracks: tracksInterface[]) {
  let artistIDArr: string[] = [];

  let i = 0
  while (artistIDArr.length < 5 && i < (tracks.length - 1)){  
    const artistID: string = tracks[i].album.artists[0].id
    if(!artistIDArr.includes(artistID)){
      artistIDArr.push(artistID);
    }
    i++;
  }
  console.log('LOOKHERE', artistIDArr);
  // TODO: randomize this?
  const url = `https://api.spotify.com/v1/recommendations?seed_artists=${artistIDArr.join(',')}&market=CA`

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
    console.log('DATA', data);
  } catch (err) {
    throw err;
  }
}