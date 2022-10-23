import { FC } from 'react';
import ArtistPopularTracks from './Components/ArtistPopularTracks/ArtistPopularTracks';
import ArtistDiscography from './Components/ArtistDiscography/ArtistDiscography';
import { ArtistAlbum } from '../../Util/modals';

interface Props{
  artistTopTracks: {tracks: SpotifyApi.TrackObjectFull[]}
  handleTrackPress: (trackURI: string, key: string) => void,
  artistAlbums: ArtistAlbum,
  handleAlbumClick: (value: any) => void,
}

const ArtistContent:FC<Props> = ({ artistTopTracks, handleTrackPress, artistAlbums, handleAlbumClick }) => {
  return (
    <div id="mainContentPage">
      <ArtistPopularTracks artistTopTracks={artistTopTracks} handleTrackPress={handleTrackPress}/>
      <ArtistDiscography artistAlbums={artistAlbums} handleAlbumClick={handleAlbumClick}/>
    </div>
  )
}

export default ArtistContent;
