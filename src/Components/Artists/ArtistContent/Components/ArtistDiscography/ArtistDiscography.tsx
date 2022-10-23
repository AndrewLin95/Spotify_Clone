import { FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ArtistAlbum } from '../../../../Util/modals';

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

  // updates the toggle button for soup choices.
  const handleAlbumChange = (
    event: React.MouseEvent<HTMLElement>,
    _albumState: string
  ) => {
    // if _albumState !== null is added, it enforces that one button is selected at all times
    if (_albumState !== null) {
      setAlbumState(_albumState);
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
      <Stack className='cardContainer'>
        
      </Stack>
    </>
  )
}

export default ArtistDiscography;
