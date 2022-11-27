import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

import CardImage from '../../GeneralComponents/CardImage';
import CardContentSimple from '../../GeneralComponents/CardContentSimple';

interface Props {
  artist: SpotifyApi.ArtistObjectFull[];
  handleArtistClick: (artistURI: string) => void;
}

const TopArtists: FC<Props> = ({ artist, handleArtistClick }) => {
  return (
    <div className="topArtistContainer">
      <div className="homeCategoryHeader">Artists</div>
      <Stack className="cardContainer">
        {Object.entries(artist).map(([key, value]) => {
          return (
            <Link
              key={key}
              className="homeCardContainer"
              to={'/artists'}
              onClick={() => {
                handleArtistClick(value.id);
              }}
              style={{ textDecoration: 'none' }}
            >
              <Card>
                <CardActionArea>
                  <CardImage imgUrl={value.images[2].url} />
                  <CardContentSimple valueName={value.name} />
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
      </Stack>
    </div>
  );
};

export default TopArtists;
