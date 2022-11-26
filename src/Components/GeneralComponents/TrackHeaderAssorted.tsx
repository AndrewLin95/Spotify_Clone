import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TrackHeaderAssorted = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">TITLE</TableCell>
        <TableCell align="left">ALBUM</TableCell>
        <TableCell align="left">
          <AccessTimeIcon fontSize="small"></AccessTimeIcon>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TrackHeaderAssorted;
