import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import CardImage from '../../GeneralComponents/CardImage';
import CardContentAlbum from '../../GeneralComponents/CardContentAlbum';
import '../style.css';

interface Props {
  handleAlbumClick: (value: any) => void;
  album: SpotifyApi.AlbumObjectFull[];
}

const TopAlbums: FC<Props> = ({ album, handleAlbumClick }) => {
  return (
    <div className="topArtistContainer">
      <div className="searchCategoryHeader">Albums</div>
      <div>
        <Stack className="cardContainer artistCardMain">
          {Object.entries(album).map(([key, value]) => {
            return (
              <Link
                key={key}
                className="homeCardContainer artistCardContainer"
                onClick={() => {
                  handleAlbumClick(value);
                }}
                to={'/playlist'}
                style={{ textDecoration: 'none' }}
              >
                <Card>
                  <CardActionArea>
                    <CardImage imgUrl={value.images[1].url} />
                    <CardContentAlbum
                      valueAlbumName={value.name}
                      releaseDate={value.release_date}
                      type={'test'}
                    />
                  </CardActionArea>
                </Card>
              </Link>
            );
          })}
        </Stack>
      </div>
    </div>
  );
};

export default TopAlbums;
