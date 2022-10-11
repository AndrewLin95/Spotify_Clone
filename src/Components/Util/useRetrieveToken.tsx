import { getTokenFromUrl } from '../Spotify/Spotify';

const useRetrieveToken = () => {
  const hash = getTokenFromUrl();
  window.location.hash = '';
  const _token = hash.access_token;
  return _token;
}

export default useRetrieveToken;