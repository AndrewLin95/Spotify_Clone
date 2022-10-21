import { FC } from 'react';
import ArtistPopularTracks from './Components/ArtistPopularTracks';

interface Props{
  artistTopTracks: {tracks: SpotifyApi.TrackObjectFull[]}
  handleTrackPress: (trackURI: string, key: string) => void,
}

const ArtistContent:FC<Props> = ({ artistTopTracks, handleTrackPress }) => {
  return (
    <div id="mainContentPage">
      <ArtistPopularTracks artistTopTracks={artistTopTracks} handleTrackPress={handleTrackPress}/>
    </div>
  )
}

export default ArtistContent;
