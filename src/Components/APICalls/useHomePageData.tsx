import { useState, useEffect } from 'react';
import { spotifyAPI } from '../Spotify/Spotify';

const useHomePageData = (user: SpotifyApi.CurrentUsersProfileResponse, userTopArtists: SpotifyApi.ArtistObjectFull[]) => {
  const [loading, setLoading] = useState(true);
  const [dataHomePagePlaylist, setDataHomePagePlaylist] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
  const [dataHomePageTopArtist, setDataHomePageTopArtist] = useState<SpotifyApi.ArtistObjectFull[]>([]);
  const [dataRelatedArtists, setDataRelatedArtists] = useState<SpotifyApi.ArtistObjectFull[]>([]);
  
  async function pullHomePageData() {
    try {
      // pulls the user playlists and top artists based on user profile
      let _response: [SpotifyApi.ListOfUsersPlaylistsResponse, SpotifyApi.UsersTopArtistsResponse] = await Promise.all([
        spotifyAPI.getUserPlaylists(user?.id),
        spotifyAPI.getMyTopArtists(user?.id),
      ])
      setDataHomePagePlaylist(_response[0].items);
      setDataHomePageTopArtist(_response[1].items);

      // retrieves the IDs for the top five user artists into an array
      let topFiveArtistID: string[] = [];
      if (_response[1].items.length != 0) {
        let i = 0;
        while (i < 5){
          topFiveArtistID.push(_response[1].items[i].id);
          i++;
        }
      }

      // randomizes the top five user artists and returns recommended artists based on the determiend ID
      let response = await spotifyAPI.getArtistRelatedArtists(topFiveArtistID[Math.floor(Math.random()*topFiveArtistID.length)]);
      setDataRelatedArtists(response.artists);
      setLoading(false);

    } catch (err) {
      throw(err);
    }
  }

  useEffect(() => {
    pullHomePageData();
  }, []);

  return { loading, dataHomePage: { dataHomePagePlaylist, dataHomePageTopArtist, dataRelatedArtists }};
}

export default useHomePageData;