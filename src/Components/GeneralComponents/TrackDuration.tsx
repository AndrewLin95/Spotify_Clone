import { FC } from 'react';
import TableCell from '@mui/material/TableCell';

interface Props{
  formattedTime: string,
}

const TrackDuration:FC<Props> = ({ formattedTime }) => {
  return(
    <TableCell className='tableDuration' align='center'>{formattedTime}</TableCell>
  )
}

export default TrackDuration;
