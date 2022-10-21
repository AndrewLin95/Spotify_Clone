import { FC } from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TrackHeaderSimple from "../../../GeneralComponents/TrackHeaderSimple";
import formatTime from '../../../Util/formatTime';

import TrackNumberArtist from '../../../GeneralComponents/TrackNumberArtist';
import TrackDuration from '../../../GeneralComponents/TrackDuration';
import TrackTitleFull from '../../../GeneralComponents/TrackTitleFull';

interface Props{
  artistTopTracks: {tracks: SpotifyApi.TrackObjectFull[]},
  handleTrackPress: (trackURI: string, key: string) => void,
}

const ArtistPopularTracks:FC<Props> = ({ artistTopTracks, handleTrackPress }) => {
  return (
    <>
      <TrackHeaderSimple />

      <TableBody>
        {Object.entries(artistTopTracks.tracks).map(([key, value]) => {
          const formattedTime = formatTime(value.duration_ms);

          return (
            <TableRow key={key}>
              <TrackNumberArtist handleTrackPress={handleTrackPress} trackUri={value.album.uri} orderingNum={key} trackNum={value.track_number} />
              <TrackTitleFull albumImg={value.album.images[2].url} trackName={value.name} artistName={value.artists[0].name} />
              <TrackDuration formattedTime={formattedTime} />
            </TableRow>
          )
        })}
      </TableBody>
    </>
  )
}

export default ArtistPopularTracks;
