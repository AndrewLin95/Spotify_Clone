import { FC, useEffect, useState, useMemo } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { debounce } from 'lodash';
import getSearchItems from '../APICalls/getSearchItem';

import './style.css';

interface Props {
  token: string;
}

const Search: FC<Props> = ({ token }) => {
  const [query, setQuery] = useState<number | string>('');

  const [artist, setArtist] = useState<SpotifyApi.ArtistSearchResponse>();
  const [album, setAlbum] = useState<SpotifyApi.AlbumSearchResponse>();
  const [track, setTrack] = useState<SpotifyApi.TrackSearchResponse>();
  const [playlist, setPlaylist] = useState<SpotifyApi.PlaylistSearchResponse>();

  // when search query is updated, contacts the spotifyAPI endpoints to retrieve artists, albums and tracks
  useEffect(() => {
    async function getSearchResults() {
      const searchResults: any = await getSearchItems(token, query);
      console.log(searchResults);
      setArtist(searchResults.artists.items);
      setAlbum(searchResults.albums.items);
      setTrack(searchResults.tracks.items);
      setPlaylist(searchResults.playlists.items);
    }
    getSearchResults();
  }, [query]);

  useEffect(() => {
    console.log('HERE', artist);
  }, [artist]);

  // updates the search state with the search parameters after a short debounce
  const handleSearch = (e: number | string) => {
    setQuery(e);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  });

  return (
    <div id="headerSearchContainer">
      <FontAwesomeIcon id="headerSearchIcon" icon={faMagnifyingGlass} />
      <input
        onChange={(e) => {
          debouncedSearch(e.target.value);
        }}
        id="headerSearchInput"
        placeholder="What do you want to listen to?"
      ></input>
    </div>
  );
};

export default Search;
