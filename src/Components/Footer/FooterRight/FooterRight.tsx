import { FC, useState } from 'react';
import Slider from '@mui/material/Slider';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

interface Props{
  player: any;
}

const FooterRight:FC<Props> = ({player}) => {
  const [volume, setVolume] = useState(20);
  
  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    // Sets the display of the slider
    setVolume(newValue as number);

    // Sets the volume of the actual player
    const _volume = (newValue as number) / 100;
    player.setVolume(_volume);
  }

  return(
    <div id='footerRightContainer'>
      <div id='footerVolumeContainer'>
        <VolumeDownIcon />
        <Slider onChange={handleVolumeChange} aria-label='Volume' value={volume} max={100}/>
      </div>
    </div>
  )
}

export default FooterRight;