import { FC, useEffect, useState } from 'react';
import MusicHeader from './MusicHeader/MusicHeader';
import MusicTracks from './MusicTracks/MusicTracks';
import usePullTracks from '../APICalls/usePullTracks';

interface Props{
  currPlaylistAlbum: SpotifyApi.PlaylistObjectSimplified,
  token: string
}

const Playlists:FC<Props> = ({ currPlaylistAlbum, token }) => {
  if (currPlaylistAlbum === undefined) {
    return (
      <div>
        Error
      </div>
    )
  }
  
  const { loadingTracks, dataTracks } = usePullTracks(currPlaylistAlbum, token);

  return (
    <div className="mainContainer">
      <MusicHeader currPlaylistAlbum={currPlaylistAlbum} />
      <MusicTracks />
    </div>
  )
}

export default Playlists; 