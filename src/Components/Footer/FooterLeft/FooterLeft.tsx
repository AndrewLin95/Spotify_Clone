import { FC } from 'react';
import "./style.css";

interface Props{
  current_track: any
}

const FooterLeft:FC<Props> = ({current_track}) => {
  if (current_track === undefined){
    return null;
  }
  
  return (
    <div id="footerLeftMain">
      <img src={current_track.album.images[1].url} />
      <div id='footerLeftText'>
        <div>{current_track.name}</div>
        <div className='tableArtist'>{current_track.artists[0].name}</div>
      </div>
    </div>
  )
}

export default FooterLeft