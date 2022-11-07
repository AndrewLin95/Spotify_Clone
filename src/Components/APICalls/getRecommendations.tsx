import { tracksInterface, tracksInterfaceRec } from "../Util/modals";

export default async function getRecommendations(token: string, tracks: tracksInterface[]) {
  let artistIDArr: string[] = [];

  // creates an array of artist IDs from the tracks in the playlist.
  let i = 0
  while (artistIDArr.length < 5 && i < (tracks.length - 1)){  
    const artistID: string = tracks[Math.floor(Math.random()*(tracks.length))].album.artists[0].id
    if(!artistIDArr.includes(artistID)){
      artistIDArr.push(artistID);
    }
    i++;
  }

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
    // returns recommendatiosn based on several artist IDs
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    let payload: tracksInterfaceRec[] = [];

    let i = 0;
    while (i < 10){
      let tempObj = {
        album: data.tracks[i].album,
        albumImg: data.tracks[i].album.images[2].url,
        artistName: data.tracks[i].artists[0].name,
        trackDuration: data.tracks[i].duration_ms,
        trackName: data.tracks[i].name,
      };
      payload.push(tempObj);
      i++;
    }
    return payload;
  } catch (err) {
    throw err;
  }
}