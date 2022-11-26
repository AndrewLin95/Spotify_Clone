import { FC } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

interface Props {
  artist: SpotifyApi.ArtistObjectFull;
}

const TopResults: FC<Props> = ({ artist }) => {
  return (
    <>
      {/* TODO: Make a play button show on hover */}
      <div id="topResultMainContainer">
        <div className="searchCategoryHeader">Top Result</div>
        <div id="topResultContainer">
          <Link
            to={'/artist'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <div id="topResultImageContainer">
              <img id="topResultImage" src={artist.images[2].url} />
            </div>
            <div id="topResultName">{artist.name}</div>
            <div id="topResultTypeContainer">
              <div>{artist.type.toUpperCase()}</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopResults;
