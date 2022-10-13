import { FC, useEffect, useState } from 'react';
import MusicHeader from './MusicHeader/MusicHeader';
import MusicTracks from './MusicTracks/MusicTracks';
import usePullTracks from '../APICalls/usePullTracks';

interface Props{
  currPlaylistAlbum: SpotifyApi.PlaylistObjectSimplified,
  token: string,
}

const Playlists:FC<Props> = ({ currPlaylistAlbum, token }) => {
  const pagingObject = {} as SpotifyApi.PagingObject<SpotifyApi.PlaylistTrackObject>
  const [tracks, setTracks] = useState<SpotifyApi.PagingObject<SpotifyApi.PlaylistTrackObject>>(pagingObject);
  const [loadingTracks, setLoadingTracks] = useState<boolean>();

  if (currPlaylistAlbum === undefined) {
    return (
      <div>
        Error
      </div>
    )
  }
  
  // potential solution, move it up to main page.
  const { _loadingTracks, dataTracks } = usePullTracks(currPlaylistAlbum, token);

  useEffect(() => {
    setTracks(dataTracks);
    setLoadingTracks(_loadingTracks);
  })

  return (
    <div className="mainContainer">
      <MusicHeader currPlaylistAlbum={currPlaylistAlbum} />
      {loadingTracks ? null : <MusicTracks tracks={tracks} /> }
    </div>
  )
}

export default Playlists; 