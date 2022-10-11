import { FC } from 'react';
import './style.css';

interface Props{
  currPlaylistAlbum: SpotifyApi.PlaylistObjectSimplified
}

const MusicHeader:FC<Props> = ({ currPlaylistAlbum }) => {
  return (
    <div className='musicHeaderMain'>
      <img className='musicHeaderImage' src={currPlaylistAlbum.images[0].url} />
      <div className='musicHeaderText'>
        <div className='musicHeaderType'>{currPlaylistAlbum.type.toUpperCase()}</div>
        <div className='musicHeaderName'>{currPlaylistAlbum.name}</div>
        <div className='musicHeaderInfo'>{currPlaylistAlbum.owner.display_name} · {currPlaylistAlbum.tracks.total} songs</div>
      </div>
    </div>
  )
}

export default MusicHeader;