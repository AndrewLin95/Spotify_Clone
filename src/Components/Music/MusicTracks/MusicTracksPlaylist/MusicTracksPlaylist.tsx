import { FC } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { toInteger } from 'lodash';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { tracksInterface, currPlaylistAlbumInterface } from '../../../Util/modals';
import formatDate from '../../../Util/formatDate';
import formatTime from '../../../Util/formatTime';

interface Props{
  tracks: tracksInterface,
  handleTrackPress: (trackURI: string, key: string) => void,
  currPlaylistAlbum: currPlaylistAlbumInterface,
  handleAlbumClick: (value: any) => void;
}

const MusicTracksPlaylist:FC<Props> = ({ tracks, handleTrackPress, currPlaylistAlbum, handleAlbumClick }) => {
  return (
    <>
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
          const formattedDate = formatDate(value.addedDate);
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
                  <img className='tableImg' src={value.albumImg}/>
                  <div className='tableTitleText'>
                    <div>{value.trackName}</div>
                    <div className='tableArtist'>{value.artistName}</div>
                  </div>
                </div>
              </TableCell>
              <div onClick={() => {handleAlbumClick(value.album)}}>
                <TableCell className='tableAlbum'>{value.album.name}</TableCell>  
              </div>
              <TableCell className='tableDateAdded'>{formattedDate}</TableCell>
              <TableCell className='tableDuration' align='center'>{formattedTime}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </>
  )
}

export default MusicTracksPlaylist;