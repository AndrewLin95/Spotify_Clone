import { FC } from 'react';
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";
import TableCell from '@mui/material/TableCell';

interface Props{
  key: number,
}

const MusicRowSkeleton:FC<Props> = ({ key }) => {
  return(
    <TableRow key={key}>
      <TableCell className='tableTrackNum' align='center'> 
        <Skeleton variant="rectangular" height={40} />
      </TableCell>
      <TableCell className='tableTitleContainer'>
        <Skeleton variant="rectangular" height={40}/>
      </TableCell>
      <div>
        <TableCell className='tableAlbum' height={40}>
          <Skeleton variant="rectangular"/>
        </TableCell>
      </div>
      <TableCell className='tableDateAdded' height={40}>
        <Skeleton variant="rectangular" />
      </TableCell>
      <TableCell className='trableDuration' height={40} align='center'>
        <Skeleton variant="rectangular" />
      </TableCell>
    </TableRow>
  )
}

export default MusicRowSkeleton;