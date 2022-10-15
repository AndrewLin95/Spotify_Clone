import { useEffect, useState } from 'react';
import './style.css';
import TimeSlider from './TimeSlider/TimeSlider';

const Footer = () => {

  return (
    <div id='footerContainer'>
      <div id='footerLeft'>
        
      </div>
      <div id='footerCenter'>
        <div id='footerPlaybackControlsContainer'>

        </div>
        <div id='footerTimeSliderContainer'>
          <div className='footerCurrTime'></div>
          <div className='footerTimeSlider'><TimeSlider /></div>
          <div className='footerTotalTime'></div>
        </div>
      </div>
      <div id='footerRight'>

      </div>
    </div>
  )
}

export default Footer;