import { FC } from 'react';
import { toInteger } from 'lodash';
import TableCell from '@mui/material/TableCell';

interface Props{
  handleTrackPress: (trackURI: string, key: string) => void,
  trackUri: string,
  key: string,
}

const TrackNumber:FC<Props> = ({ handleTrackPress, trackUri, key }) => {
  return (
    <TableCell 
      onClick={() => {handleTrackPress(trackUri, key)}}
      className='tableTrackNum' 
      align='center'>{1 + toInteger(key)}
    </TableCell>
  )
}

export default TrackNumber;