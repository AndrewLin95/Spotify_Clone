import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TrackHeaderFull = () => {
  return(
    <TableHead>
      <TableRow>
        <TableCell align='center'>#</TableCell>
        <TableCell align='left'>TITLE</TableCell>
        <TableCell align='left'>ALBUM</TableCell>
        <TableCell align='left'>DATE ADDED</TableCell>
        <TableCell align='left'><AccessTimeIcon fontSize='small'></AccessTimeIcon></TableCell>
      </TableRow>
  </TableHead>
  )
}

export default TrackHeaderFull;