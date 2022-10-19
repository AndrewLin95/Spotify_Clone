import { FC, useEffect, useState } from 'react';
import './style.css';
import { FastAverageColor } from 'fast-average-color';

interface Props{
  currPlaylistAlbum: {
    image: string,
    type: string,
    name: string,
    owner_name: string,
    totalTracks: string,
    uri: string,
  },
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
  }, [currPlaylistAlbum])

  return (
    <div className='musicHeaderMain' style={{
      backgroundImage: `linear-gradient(rgba(${domColor.value[0]}, ${domColor.value[1]}, ${domColor.value[2]}, 0.7), rgba(25,25,25,0) )`,  
      // backgroundColor: `rgba(${domColor.value[0]}, ${domColor.value[1]}, ${domColor.value[2]}, 0.7)`,
    }}>
      <div className='musicHeaderContainer'>
        <img className='musicHeaderImage' src={currPlaylistAlbum.image} crossOrigin='anonymous' width={`200px`} height={`200px`}/>
        <div className='musicHeaderText'>
          <div className='musicHeaderType'>{currPlaylistAlbum.type.toUpperCase()}</div>
          <div className='musicHeaderName'>{currPlaylistAlbum.name}</div>
          <div className='musicHeaderInfo'>{currPlaylistAlbum.owner_name} · {currPlaylistAlbum.totalTracks} songs</div>
        </div>
      </div>
    </div>
  )
}

export default MusicHeader;