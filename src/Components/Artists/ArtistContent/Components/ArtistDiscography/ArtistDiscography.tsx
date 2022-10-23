import { FC } from 'react';
import Stack from '@mui/material/Stack';
import { ArtistAlbum } from '../../../../Util/modals';

interface Props{
  artistAlbums: ArtistAlbum,
}

const ArtistDiscography:FC<Props> = ({ artistAlbums }) => {
  return(
    <>
      <div className='homeCategoryHeader'>Discography</div>
      <Stack className='cardContainer'>
        
      </Stack>
    </>
  )
}

export default ArtistDiscography;
