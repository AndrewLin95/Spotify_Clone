import { FC } from 'react';
import TableCell from '@mui/material/TableCell';
import { Link } from 'react-router-dom';

interface Props{
  albumImg: string,
  trackName: string,
  artistName: string,
  artistID: string,
  handleArtistClick: (artistID: string) => void;
}

const TrackTitleFull:FC<Props> = ({ albumImg, trackName, artistName, artistID, handleArtistClick}) => {
  return (
    <TableCell className='tableTitleContainer'> 
      <div className='tableTitle'>
        <img className='tableImg' src={albumImg}/>
        <div className='tableTitleText'>
          <div>{trackName}</div>
          <Link to={'/artists'} style={{textDecoration: 'none'}} onClick={() => {handleArtistClick(artistID)}} className='tableArtist'>{artistName}</Link>
        </div>
      </div>
  </TableCell>
  )
}

export default TrackTitleFull;