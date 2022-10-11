import { useState, useEffect } from 'react';
import { spotifyAPI } from '../Spotify/Spotify';

const useHomePageData = (user: SpotifyApi.CurrentUsersProfileResponse) => {
  const [loading, setLoading] = useState(true);
  const [dataHomePagePlaylist, setDataHomePagePlaylist] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
  const [dataHomePageTopArtist, setDataHomePageTopArtist] = useState<SpotifyApi.ArtistObjectFull[]>([]);
  
  async function pullHomePageData() {
    try {
      let _response: [SpotifyApi.ListOfUsersPlaylistsResponse, SpotifyApi.UsersTopArtistsResponse] = await Promise.all([
        spotifyAPI.getUserPlaylists(user?.id),
        spotifyAPI.getMyTopArtists(user?.id),
      ]);
      setDataHomePagePlaylist(_response[0].items);
      setDataHomePageTopArtist(_response[1].items);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    pullHomePageData();
  }, []);

  return { loading, dataHomePage: { dataHomePagePlaylist, dataHomePageTopArtist }};
}

export default useHomePageData;