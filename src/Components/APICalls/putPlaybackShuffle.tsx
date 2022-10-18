
export default async function putPlaybackShuffle(shuffleState: boolean, token: string, deviceID: string) {
  const url = `https://api.spotify.com/v1/me/player/shuffle?state=${shuffleState}&device_id=${deviceID}`;
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  };

  try {
    const response = await fetch(url, requestOptions);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}