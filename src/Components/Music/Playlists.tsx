import { FC, useEffect, useState } from 'react';
import MusicHeader from './MusicHeader/MusicHeader';
import MusicTracks from './MusicTracks/MusicTracks';
import usePullTracks from '../APICalls/usePullTracks';
import PlaylistTrackObjectFull from '../Util/modals';
interface Props{
  currPlaylistAlbum: SpotifyApi.PlaylistObjectSimplified,
  token: string,
  handleTrackPress: (trackURI: string) => void,
}

const Playlists:FC<Props> = ({ currPlaylistAlbum, token, handleTrackPress }) => {
  const pagingObject = {} as PlaylistTrackObjectFull[]
  const [tracks, setTracks] = useState<PlaylistTrackObjectFull[]>(pagingObject);
  const [loadingTracks, setLoadingTracks] = useState<boolean>(true);

  const { _loadingTracks, dataTracks } = usePullTracks(currPlaylistAlbum, token);

  useEffect(() =>{
    setTracks(dataTracks);
    setLoadingTracks(_loadingTracks);
  })


  return (
    <div className="mainContainer">
      <MusicHeader currPlaylistAlbum={currPlaylistAlbum} />
      {loadingTracks ? null : <MusicTracks tracks={tracks} handleTrackPress={handleTrackPress} /> }
    </div>
  )
}

export default Playlists; 