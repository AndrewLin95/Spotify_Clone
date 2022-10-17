import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

interface Props{
  is_paused: boolean,
  trackPosition: number,
}

const TimeSlider:FC<Props> = ({ is_paused, trackPosition }) => {

  const [timeValue, setTimeValue] = useState(0);

  useEffect(() => {
    if (is_paused) {
      return;
    }
    console.log(timeValue);
    const interval = setInterval(() => setTimeValue(timeValue + 1), 1000)
    return () => clearInterval(interval);
  })

  useEffect(() => {
    const trackPositionSeconds = trackPosition / 1000;
    console.log(trackPositionSeconds);
    setTimeValue(trackPositionSeconds);
  }, [trackPosition])

  return (
    <Box sx={{width: 300}}>
      <Stack spacing={2} direction='row' alignItems='center'>
        <Slider aria-label='TrackTime' value={timeValue} max={100} />
      </Stack>
    </Box>
  )
}

export default TimeSlider;