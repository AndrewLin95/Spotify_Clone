import { FC, useEffect, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

interface Props{
  artistData: SpotifyApi.ArtistObjectFull 
}

const ArtistHeader:FC<Props> = ({ artistData }) => {
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
  }, [artistData])
  
  return (
    <div className='musicHeaderMain' style={{
      backgroundImage: `linear-gradient(rgba(${domColor.value[0]}, ${domColor.value[1]}, ${domColor.value[2]}, 0.7), rgba(25,25,25,0) )`,  
      // backgroundColor: `rgba(${domColor.value[0]}, ${domColor.value[1]}, ${domColor.value[2]}, 0.7)`,
    }}>
      <div className='musicHeaderContainer'>
        <img className='musicHeaderImage' src={artistData.images[1].url} crossOrigin='anonymous' width={`200px`} height={`200px`}/>
        <div className='musicHeaderText'>
          <div className='musicHeaderName'>{artistData.name}</div>
          <div className='musicHeaderInfo'>{artistData.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Followers </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistHeader;