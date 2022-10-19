import { FC } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { toInteger } from 'lodash';
import './style.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import PlaylistTrackObjectFull from '../../Util/modals';
import formatDate from '../../Util/formatDate';
import formatTime from '../../Util/formatTime';

interface Props{
  tracks: PlaylistTrackObjectFull[],
  handleTrackPress: (trackURI: string, key: string) => void,
  currPlaylistAlbum: {
    image: string,
    type: string,
    name: string,
    owner_name: string,
    totalTracks: string,
    playlisturi: string,
    urlID: string,
  },
}

const MusicTracks:FC<Props> = ({ tracks, handleTrackPress, currPlaylistAlbum }) => {
  if (tracks === undefined){
    return null;
  }

  return(
    <TableContainer>
      <Table className='tableMain'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>#</TableCell>
            <TableCell align='left'>TITLE</TableCell>
            <TableCell align='left'>ALBUM</TableCell>
            <TableCell align='left'>DATE ADDED</TableCell>
            <TableCell align='center'><AccessTimeIcon fontSize='small'></AccessTimeIcon></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Object.entries(tracks).map(([key, value]) => {
            const formattedDate = formatDate(value.added_at);
            const formattedTime = formatTime(value.track.duration_ms);

            return (
              <TableRow key={key}>
                <TableCell 
                  onClick={() => {handleTrackPress(currPlaylistAlbum.playlisturi, key)}}
                  className='tableTrackNum' 
                  align='center'>{1 + toInteger(key)}
                </TableCell>
                <TableCell className='tableTitleContainer'> 
                  <div className='tableTitle'>
                    <img className='tableImg' src={value.track.album.images[1].url}/>
                      <div className='tableTitleText'>
                        <div>{value.track.name}</div>
                        <div className='tableArtist'>{value.track.artists[0].name}</div>
                      </div>
                  </div>
                </TableCell>
                <Link to={'/playlist'} style={{textDecoration: 'none'}}>
                  <TableCell className='tableAlbum'>{value.track.album.name}</TableCell>  
                </Link>
                <TableCell className='tableDateAdded'>{formattedDate}</TableCell>
                <TableCell className='tableDuration' align='center'>{formattedTime}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MusicTracks;