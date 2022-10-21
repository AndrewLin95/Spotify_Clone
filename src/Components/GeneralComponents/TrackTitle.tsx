import { FC } from 'react';
import TableCell from '@mui/material/TableCell';

interface Props{
  trackName: string,
  artistName: string,
}

const TrackTitle:FC<Props> = ({ trackName, artistName }) => {
  return (
    <TableCell className='tableTitleContainer'> 
      <div className='tableTitle'>
        <div className='tableTitleText'>
          <div>{trackName}</div>
          <div className='tableArtist'>{artistName}</div>
        </div>
      </div>
  </TableCell>
  )
}

export default TrackTitle;