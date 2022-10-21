import { FC } from 'react';
import TableCell from '@mui/material/TableCell';

interface Props{
  albumImg: string,
  trackName: string,
  artistName: string,
}

const TrackTitleFull:FC<Props> = ({ albumImg, trackName, artistName }) => {
  return (
    <TableCell className='tableTitleContainer'> 
      <div className='tableTitle'>
        <img className='tableImg' src={albumImg}/>
        <div className='tableTitleText'>
          <div>{trackName}</div>
          <div className='tableArtist'>{artistName}</div>
        </div>
      </div>
  </TableCell>
  )
}

export default TrackTitleFull;