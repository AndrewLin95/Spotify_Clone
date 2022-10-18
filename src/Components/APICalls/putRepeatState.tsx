export default async function putRepeatState(repeatState: string, deviceID: string, token: string) {
  console.log(repeatState);
  const url = `https://api.spotify.com/v1/me/player/repeat?state=${repeatState}&device_id=${deviceID}`
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