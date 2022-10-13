import { FC, useEffect, useState } from 'react';
import MusicHeader from './MusicHeader/MusicHeader';
import MusicTracks from './MusicTracks/MusicTracks';
import usePullTracks from '../APICalls/usePullTracks';

interface Props{
  currPlaylistAlbum: SpotifyApi.PlaylistObjectSimplified,
  token: string,
}

const Playlists:FC<Props> = ({ currPlaylistAlbum, token }) => {
  const pagingObject = {} as SpotifyApi.PagingObject<[]>
  const [tracks, setTracks] = useState<SpotifyApi.PagingObject<[]>>(pagingObject);

  if (currPlaylistAlbum === undefined) {
    return (
      <div>
        Error
      </div>
    )
  }
  
  const { loadingTracks, dataTracks } = usePullTracks(currPlaylistAlbum, token);

  useEffect(() => {
    setTracks(dataTracks);
  })

  return (
    <div className="mainContainer">
      <MusicHeader currPlaylistAlbum={currPlaylistAlbum} />
      <MusicTracks tracks={tracks}/>
    </div>
  )
}

export default Playlists; 