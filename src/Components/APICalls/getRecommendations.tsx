import { tracksInterface } from "../Util/modals";

export default async function getRecommendations(token: string, tracks: tracksInterface) {
  const url = `https://api.spotify.com/v1/recommendations?seed_artists=3Ok4zuAk4GgMC15VYQNmJt,41MozSoPIsD1dJM0CLPjZF,4NHQUGzhtTLFvgF5SZesLK&market=CA`

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

    console.log(data);
  } catch (err) {
    throw err;
  }
}