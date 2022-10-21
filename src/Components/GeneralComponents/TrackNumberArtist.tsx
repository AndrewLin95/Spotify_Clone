import { FC } from 'react';
import { toInteger } from 'lodash';
import TableCell from '@mui/material/TableCell';

interface Props{
  handleTrackPress: (trackURI: string, key: string) => void,
  trackUri: string,
  trackNum: number,
  orderingNum: string;
}

const TrackNumberArtist:FC<Props> = ({ handleTrackPress, trackUri, trackNum, orderingNum }) => {
  // Not sure why, but the spotify documentation is offset by 1
  const realTrackNum = (trackNum - 1).toString()

  return (
    <TableCell 
      onClick={() => {handleTrackPress(trackUri, realTrackNum)}}
      className='tableTrackNum' 
      align='center'>{1 + toInteger(orderingNum)}
    </TableCell>
  )
}

export default TrackNumberArtist;