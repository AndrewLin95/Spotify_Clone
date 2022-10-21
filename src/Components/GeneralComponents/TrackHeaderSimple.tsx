import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TrackHeaderSimple = () => {
  return(
    <TableHead>
      <TableRow>
        <TableCell align='center'>#</TableCell>
        <TableCell align='left'>TITLE</TableCell>
        <TableCell align='center'><AccessTimeIcon fontSize='small'></AccessTimeIcon></TableCell>
      </TableRow>
  </TableHead>
  )
}

export default TrackHeaderSimple;