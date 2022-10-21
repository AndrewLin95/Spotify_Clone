import { FC } from 'react';
import TableCell from '@mui/material/TableCell';

interface Props{
  formattedDate: string,
}

const TrackAddedDate:FC<Props> = ({ formattedDate }) => {
  return (
    <TableCell className='tableDateAdded'>{formattedDate}</TableCell>
  )
}

export default TrackAddedDate;
