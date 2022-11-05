import { FC, useState, useEffect } from 'react';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import getRecommendations from '../../APICalls/getRecommendations';

import TrackTitleFull from '../../GeneralComponents/TrackTitleFull';
import TrackAlbumName from '../../GeneralComponents/TrackAlbumName';
import TrackDuration from '../../GeneralComponents/TrackDuration';

import { tracksInterface, tracksInterfaceRec } from '../../Util/modals';
import formatTime from '../../Util/formatTime';
import './style.css';

interface Props {
  token: string;
  tracks: tracksInterface[];
  handleTrackPress: (trackURI: string, key: string) => void,
  handleAlbumClick: (value: any) => void,
  handleArtistClick: (artistID: string) => void,
}

const MusicRecommendations:FC<Props> = ({ token, tracks, handleTrackPress, handleAlbumClick, handleArtistClick }) => {
  
  const musicRecTracksInterface = [] as tracksInterfaceRec[];
  const [musicRecTracks, setMusicRecTracks] = useState<tracksInterfaceRec[]>(musicRecTracksInterface);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (tracks === undefined){
      return;
    }
    async function _getRecommendations() {
      const data = await getRecommendations(token, tracks);

      setMusicRecTracks(data);
      setLoading(false);
    }
    _getRecommendations();
  }, [tracks])
  
  
  return(
    <>
      <div className='darkBackground'>
        <div className='homeCategoryHeader'>Recommended</div>
        <div className='homeCategoryHeaderSmall'>Based on what's is in this playlist</div>

        <TableContainer> 
          <Table className='tableMain'>
            <TableHead>
              <TableRow>
                <TableCell sx={{'color': 'rgba(0,0,0,1)'}}>..</TableCell>
                <TableCell align='left'>TITLE</TableCell>
                <TableCell align='left'>ALBUM</TableCell>
                <TableCell align='left'><AccessTimeIcon fontSize='small'></AccessTimeIcon></TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {Object.entries(musicRecTracks).map(([key,value]) => {
                const formattedTime = formatTime(value.trackDuration);

                return(
                  <TableRow key={key} className='tableRow'>
                    <TableCell></TableCell>
                    <TrackTitleFull 
                      albumImg={value.albumImg} 
                      trackName={value.trackName} 
                      artistName={value.artistName} 
                      artistID={value.album.artists[0].id} 
                      handleArtistClick={handleArtistClick} 
                    />
                    <TrackAlbumName
                      handleAlbumClick={handleAlbumClick} 
                      album={value.album} 
                      albumName={value.album.name}
                    />
                    <TrackDuration formattedTime={formattedTime} />
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default MusicRecommendations;