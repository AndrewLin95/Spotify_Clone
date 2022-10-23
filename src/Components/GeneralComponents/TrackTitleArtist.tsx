import { FC } from 'react';
import TableCell from '@mui/material/TableCell';

interface Props{
  albumImg: string,
  trackName: string,
}

const TrackTitleArtistl:FC<Props> = ({ albumImg, trackName}) => {
  return (
    <TableCell className='tableTitleContainer'> 
      <div className='tableTitle'>
        <img className='tableImg' src={albumImg}/>
        <div className='tableTitleText'>
          <div>{trackName}</div>
        </div>
      </div>
  </TableCell>
  )
}

export default TrackTitleArtistl;