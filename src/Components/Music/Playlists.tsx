import { FC } from 'react';
import MusicHeader from './MusicHeader/MusicHeader';

interface Props{
  currPlaylistAlbum: SpotifyApi.PlaylistObjectSimplified
}

const Playlists:FC<Props> = ({ currPlaylistAlbum }) => {
  if (currPlaylistAlbum === undefined) {
    return (
      <div>
        Error
      </div>
    )
  }
  
  return (
    <div className="mainContainer">
      <MusicHeader currPlaylistAlbum={currPlaylistAlbum} />
    </div>
  )
}

export default Playlists;