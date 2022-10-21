import { FC } from 'react';
import { toInteger } from 'lodash';
import TableCell from '@mui/material/TableCell';

interface Props{
  handleTrackPress: (trackURI: string, key: string) => void,
  trackUri: string,
  trackNum: string,
}

const TrackNumber:FC<Props> = ({ handleTrackPress, trackUri, trackNum }) => {
  return (
    <TableCell 
      onClick={() => {handleTrackPress(trackUri, trackNum)}}
      className='tableTrackNum' 
      align='center'>{1 + toInteger(trackNum)}
    </TableCell>
  )
}

export default TrackNumber;