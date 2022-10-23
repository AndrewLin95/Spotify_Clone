import { FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArtistAlbum, AlbumObjectFull } from '../../../../Util/modals';
import CardImage from '../../../../GeneralComponents/CardImage'
import CardContentAlbum from '../../../../GeneralComponents/CardContentAlbum';
import './style.css';

interface Props{
  artistAlbums: ArtistAlbum,
}

const albumStates = {
  All: 'dataAll',
  Albums: 'dataAlbums',
  Singles: 'dataSingles',
  Others: 'dataOthers',
}

const ArtistDiscography:FC<Props> = ({ artistAlbums }) => {

  const [albumState, setAlbumState] = useState(artistAlbums.dataAll);

  // updates the toggle button for soup choices.
  const handleAlbumChange = (
    event: React.MouseEvent<HTMLElement>,
    _albumState: string
  ) => {
    // if _albumState !== null is added, it enforces that one button is selected at all times
    if (_albumState !== null) {
      switch (_albumState) {
        case albumStates.All:
          setAlbumState(artistAlbums.dataAll);
          break;
        case albumStates.Albums:
          setAlbumState(artistAlbums.dataAlbums);
          break;
        case albumStates.Singles:
          setAlbumState(artistAlbums.dataSingles);
          break;
        case albumStates.Others:
          setAlbumState(artistAlbums.dataOthers);
          break;
        default:
          break;
      }
    }
  };

  return(
    <>
      <div className='homeCategoryHeader'>Discography</div>
      <ToggleButtonGroup
        exclusive
        value={albumState}
        onChange={handleAlbumChange}
      >
        <ToggleButton value={albumStates.All}>{albumStates.All}</ToggleButton>
        <ToggleButton value={albumStates.Albums}>{albumStates.Albums}</ToggleButton>
        <ToggleButton value={albumStates.Singles}>{albumStates.Singles}</ToggleButton>
        <ToggleButton value={albumStates.Others}>{albumStates.Others}</ToggleButton>
      </ToggleButtonGroup>
      <Stack className='cardContainer artistCardMain'>
        {Object.entries(albumState).map(([key, value]) => {
          return(
            <div 
              key={key} 
              className='homeCardContainer artistCardContainer'
            >
              <Card>
                <CardActionArea>
                  <CardImage imgUrl={value.images[1].url}/>
                  <CardContentAlbum 
                    valueAlbumName={value.name} 
                    releaseDate={value.release_date} 
                    type={value.album_group}
                  />
                </CardActionArea>
              </Card>
            </div>
          )
        })}
      </Stack>
    </>
  )
}

export default ArtistDiscography;
