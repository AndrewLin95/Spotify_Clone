import { FC } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { toInteger } from 'lodash';
import './style.css';
import PlaylistTrackObjectFull from '../../Util/modals';

interface Props{
  tracks: SpotifyApi.PagingObject<PlaylistTrackObjectFull>,
}

const MusicTracks:FC<Props> = ({ tracks }) => {

  return(
    <TableContainer>
      <Table className='tableMain'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>#</TableCell>
            <TableCell align='left'>TITLE</TableCell>
            <TableCell align='left'>ALBUM</TableCell>
            <TableCell align='left'>DATE ADDED</TableCell>
            <TableCell align='center'>duration_temp</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Object.entries(tracks.items).map(([key, value]) => {


            return (
              <TableRow key={key}>
                <TableCell className='tableTrackNum' align='center'>{1 + toInteger(key)}</TableCell>
                <TableCell className='tableTitle'>{value.track.name}</TableCell>
                <TableCell className='tableAlbum'>{value.track.album.name}</TableCell>
                <TableCell className='tableDateAdded'>{value.added_at}</TableCell>
                <TableCell className='tableDuration'>{value.track.duration_ms}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MusicTracks;