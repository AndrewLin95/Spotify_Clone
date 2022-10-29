import { spotifyAPI } from '../Spotify/Spotify';

export default async function pullHomePageData(user: any, token: string) {
  try {
    let homePageData = {};
    // pulls the user playlists and top artists based on user profile
    let _response: [SpotifyApi.ListOfUsersPlaylistsResponse, SpotifyApi.UsersTopArtistsResponse] = await Promise.all([
      spotifyAPI.getUserPlaylists(user?.id),
      spotifyAPI.getMyTopArtists(user?.id),
    ])
    homePageData = {"dataHomePagePlaylist": _response[0].items}
    homePageData = {...homePageData, 'dataHomePageTopArtist' : _response[1].items}

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
    homePageData = {...homePageData, 'dataRelatedArtists' : response.artists}

    const url = `https://api.spotify.com/v1/browse/featured-playlists`
    const requestOptions = {
      method: 'GET', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
    const responseFeatured = await fetch(url, requestOptions)
    const dataFeatured = await responseFeatured.json();

    homePageData = {...homePageData, 'dataFeatured' : dataFeatured.playlists.items}

    return homePageData;
  } catch (err) {
    throw(err);
  }
}