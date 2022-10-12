import { FC } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const MusicTracks:FC = () => {
  return(
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>#</TableCell>
            <TableCell align='left'>TITLE</TableCell>
            <TableCell align='left'>ALBUM</TableCell>
            <TableCell align='center'>duration_temp</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MusicTracks;