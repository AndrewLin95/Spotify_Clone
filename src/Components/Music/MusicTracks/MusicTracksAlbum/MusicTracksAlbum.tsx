import { FC } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { toInteger } from 'lodash';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { tracksInterfaceAlbum } from '../../../Util/modals';
import formatTime from '../../../Util/formatTime';

interface Props{
  albumTracks: tracksInterfaceAlbum,
  handleTrackPress: (trackURI: string, key: string) => void,
  currPlaylistAlbum: {
    image: string,
    type: string,
    name: string,
    owner_name: string,
    totalTracks: string,
    uri: string,
    urlID: string,
  },
}

const MusicTracksAlbum:FC <Props> = ({ albumTracks, handleTrackPress, currPlaylistAlbum }) => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell align='center'>#</TableCell>
          <TableCell align='left'>TITLE</TableCell>
          <TableCell align='center'><AccessTimeIcon fontSize='small'></AccessTimeIcon></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {Object.entries(albumTracks).map(([key, value]) => {
          const formattedTime = formatTime(value.trackDuration);

          return (
            <TableRow key={key}>
              <TableCell 
                onClick={() => {handleTrackPress(currPlaylistAlbum.uri, key)}}
                className='tableTrackNum' 
                align='center'>{1 + toInteger(key)}
              </TableCell>
              <TableCell className='tableTitleContainer'> 
                <div className='tableTitle'>
                  <div className='tableTitleText'>
                    <div>{value.trackName}</div>
                    <div className='tableArtist'>{value.artistName}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className='tableDuration' align='center'>{formattedTime}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </>
  )
}

export default MusicTracksAlbum;