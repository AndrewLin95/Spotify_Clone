import { FC, useEffect, useState, useMemo } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { debounce } from 'lodash';

import './style.css';

interface Props {}

const Search: FC<Props> = () => {
  const [query, setQuery] = useState<number | string>('');

  // when search query is updated, contacts the spotifyAPI endpoints to retrieve artists, albums and tracks
  useEffect(() => {
    async function searchArtist() {
      try {
        //to add
      } catch (err) {
        throw err;
      }
    }

    if (query) {
      searchArtist();
    }
  }, [query]);

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
