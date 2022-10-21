import { FC } from 'react';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { tracksInterface } from '../../../Util/modals';
import formatDate from '../../../Util/formatDate';
import formatTime from '../../../Util/formatTime';

import TrackHeaderFull from '../../../GeneralComponents/TrackHeaderFull';
import TrackNumber from '../../../GeneralComponents/TrackNumber';
import TracktitleFull from '../../../GeneralComponents/TrackTitleFull';
import TrackAlbumName from '../../../GeneralComponents/TrackAlbumName';
import TrackAddedDate from '../../../GeneralComponents/TrackAddedDate';
import TrackDuration from '../../../GeneralComponents/TrackDuration';

interface Props{
  tracks: tracksInterface,
  handleTrackPress: (trackURI: string, key: string) => void,
  trackUri: string,
  handleAlbumClick: (value: any) => void;
}

const MusicTracksPlaylist:FC<Props> = ({ tracks, handleTrackPress, trackUri, handleAlbumClick }) => {
  return (
    <>
      <TrackHeaderFull />

      <TableBody>
        {Object.entries(tracks).map(([key, value]) => {
          const formattedDate = formatDate(value.addedDate);
          const formattedTime = formatTime(value.trackDuration);

          return (
            <TableRow key={key}>
              <TrackNumber handleTrackPress={handleTrackPress} trackUri={trackUri} key={key} />
              <TracktitleFull albumImg={value.albumImg} trackName={value.trackName} artistName={value.artistName} />
              <TrackAlbumName handleAlbumClick={handleAlbumClick} album={value.album} albumName={value.album.name}/>
              <TrackAddedDate formattedDate={formattedDate}/>
              <TrackDuration formattedTime={formattedTime} />
            </TableRow>
          )
        })}
      </TableBody>
    </>
  )
}

export default MusicTracksPlaylist;