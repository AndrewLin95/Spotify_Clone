import { FC, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import { tracksInterfaceAlbum } from '../../../Util/modals';

interface Props {
  token: string,
  albumTracks: tracksInterfaceAlbum[],
}

const MusicTracksAlbumRec:FC<Props> = ({ token, albumTracks }) => {
  
  useEffect(() => {
    console.log(albumTracks);
    async function _getRecommendationsAlbum(){
      console.log('fetch call');
    }
    _getRecommendationsAlbum();
  }, [albumTracks])
  
  return (
    <>
      <div className='discographyHeader'>More by _____</div>
      <Stack className='cardContainer artistCardMain'>



      </Stack>
    </>
  )
}

export default MusicTracksAlbumRec;