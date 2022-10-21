import { FC } from 'react';
import TableCell from '@mui/material/TableCell';

interface Props{
  handleAlbumClick: (value: any) => void;
  album: any;
  albumName: any;
}

const TrackAlbumName:FC<Props> = ({ handleAlbumClick, album, albumName }) => {
  return (
    <div onClick={() => {handleAlbumClick(album)}}>
      <TableCell className='tableAlbum'>{albumName}</TableCell>  
  </div>
  )
}

export default TrackAlbumName;
