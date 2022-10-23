import { FC } from 'react';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { tracksInterfaceAlbum } from '../../../Util/modals';
import formatTime from '../../../Util/formatTime';

import TrackHeaderSimple from '../../../GeneralComponents/TrackHeaderSimple';
import TrackNumber from '../../../GeneralComponents/TrackNumber';
import TrackTitleSimple from '../../../GeneralComponents/TrackTitleSimple';
import TrackDuration from '../../../GeneralComponents/TrackDuration';

interface Props{
  albumTracks: tracksInterfaceAlbum,
  handleTrackPress: (trackURI: string, key: string) => void,
  trackUri: string,
  handleArtistClick: (artistID: string) => void,
}

const MusicTracksAlbum:FC <Props> = ({ albumTracks, handleTrackPress, trackUri, handleArtistClick }) => {
  return (
    <>
      <TrackHeaderSimple />

      <TableBody>
        {Object.entries(albumTracks).map(([key, value]) => {
          const formattedTime = formatTime(value.trackDuration);
          return (
            <TableRow key={key}>
              <TrackNumber handleTrackPress={handleTrackPress} trackUri={trackUri} trackNum={key} />
              <TrackTitleSimple trackName={value.trackName} artistName={value.artistName} artistID={value.album} handleArtistClick={handleArtistClick}/>
              <TrackDuration formattedTime={formattedTime} />
            </TableRow>
          )
        })}
      </TableBody>
    </>
  )
}

export default MusicTracksAlbum;