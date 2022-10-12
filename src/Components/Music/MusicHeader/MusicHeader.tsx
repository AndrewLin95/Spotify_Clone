import { FC, useEffect, useState } from 'react';
import './style.css';
import { FastAverageColor } from 'fast-average-color';

interface Props{
  currPlaylistAlbum: SpotifyApi.PlaylistObjectSimplified
}

const MusicHeader:FC<Props> = ({ currPlaylistAlbum }) => {
  const [domColor, setDomColor] = useState<any>({value: [ 20, 20, 20 ]});
  
  const fac = new FastAverageColor();

  useEffect(() => {
    const image: any = document.querySelector('.musicHeaderImage');
    // color = fac.getColor(image);
    fac.getColorAsync(image, { algorithm: 'dominant'})
      .then(color => {
        setDomColor(color);
      }).catch(e => {
        throw(e);
      })
  }, [])

  return (
    <div className='musicHeaderMain' style={{backgroundColor: `rgba(${domColor.value[0]}, ${domColor.value[1]}, ${domColor.value[2]}, 0.7)`}}>
      <div className='musicHeaderContainer'>
        <img className='musicHeaderImage' src={currPlaylistAlbum.images[0].url} crossOrigin='anonymous' width={`200px`} height={`200px`}/>
        <div className='musicHeaderText'>
          <div className='musicHeaderType'>{currPlaylistAlbum.type.toUpperCase()}</div>
          <div className='musicHeaderName'>{currPlaylistAlbum.name}</div>
          <div className='musicHeaderInfo'>{currPlaylistAlbum.owner.display_name} · {currPlaylistAlbum.tracks.total} songs</div>
        </div>
      </div>
    </div>
  )
}

export default MusicHeader;