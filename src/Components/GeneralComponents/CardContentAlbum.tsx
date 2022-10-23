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
      <div className='artistCardName'>{valueAlbumName}</div>
      <div>{releaseDate} · {type}</div>
    </CardContent>
  )
}

export default CardContentAlbum;