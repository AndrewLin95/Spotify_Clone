export default async function getSearchItems(
  token: string,
  query: string | number
) {
  if (query === '') {
    return;
  }

  const url = `https://api.spotify.com/v1/search?q=${query}&type=album,artist,track,playlist&market=CA&limit=20`;

  const requestOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log('SEARCH DATA', data);
  } catch (err) {
    throw err;
  }
}
