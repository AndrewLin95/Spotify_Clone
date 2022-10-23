import { FC } from 'react';
import CardContent from '@mui/material/CardContent';

interface Props{
  valueAlbumName: string,
  releaseDate: string,
  type: string,
}

const CardContentAlbum:FC<Props> = ({ valueAlbumName, releaseDate, type }) => {
  return(
    <CardContent>
      <div className='artistCardInfoDetails'>
        <div className='artistCardName'>{valueAlbumName}</div>
        <div className='artistCardName'>{releaseDate} · {type}</div>
      </div>
    </CardContent>
  )
}

export default CardContentAlbum;