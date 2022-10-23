import { FC, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { ArtistAlbum, AlbumObjectFull } from '../../../../Util/modals';
import CardImage from '../../../../GeneralComponents/CardImage'
import CardContentAlbum from '../../../../GeneralComponents/CardContentAlbum';
import './style.css';



interface Props{
  artistAlbums: ArtistAlbum,
}

const albumStates = {
  All: 'All',
  Albums: 'Albums',
  Singles: 'Singles',
  Others: 'Others',
}

const ArtistDiscography:FC<Props> = ({ artistAlbums }) => {

  const [albumState, setAlbumState] = useState(albumStates.All);
  const [albumData, setAlbumData] = useState(artistAlbums.dataAll)

  // updates the toggle button for soup choices.
  const handleAlbumChange = (
    event: React.MouseEvent<HTMLElement>,
    _albumState: string | null,
  ) => {
    // if _albumState !== null is added, it enforces that one button is selected at all times
    if (_albumState !== null) {
      switch (_albumState) {
        case albumStates.All:
          setAlbumState(albumStates.All);
          break;
        case albumStates.Albums:
          setAlbumState(albumStates.Albums);
          break;
        case albumStates.Singles:
          setAlbumState(albumStates.Singles);
          break;
        case albumStates.Others:
          setAlbumState(albumStates.Others);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    switch (albumState) {
      case albumStates.All:
        setAlbumData(artistAlbums.dataAll);
        break;
      case albumStates.Albums:
        setAlbumData(artistAlbums.dataAlbums);
        break;
      case albumStates.Singles:
        setAlbumData(artistAlbums.dataSingles);
        break;
      case albumStates.Others:
        setAlbumData(artistAlbums.dataOthers);
        break;
      default:
        break;
    }
  }, [albumState])

  // below is required to use custom mui themes
  const theme = useTheme();

  // style overrides for ToggleButton
  const ToggleButton = styled(MuiToggleButton)({
    '&.MuiToggleButton-root': {
      backgroundColor: 'rgba(55, 55, 55, 0.7)',
      color: '#eeeeee',
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: '#eeeeee',
      color: 'rgba(55, 55, 55, 0.7)',
    }
  });

  return(
    <>
      <div className='homeCategoryHeader'>Discography</div>
      <ToggleButtonGroup
        exclusive
        value={albumState}
        onChange={handleAlbumChange}
        className='discographyToggleGroup'
      >
        <ToggleButton value={albumStates.All}>{albumStates.All}</ToggleButton>
        <ToggleButton value={albumStates.Albums}>{albumStates.Albums}</ToggleButton>
        <ToggleButton value={albumStates.Singles}>{albumStates.Singles}</ToggleButton>
        <ToggleButton value={albumStates.Others}>{albumStates.Others}</ToggleButton>
      </ToggleButtonGroup>
      <Stack className='cardContainer artistCardMain'>
        {Object.entries(albumData).map(([key, value]) => {
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
