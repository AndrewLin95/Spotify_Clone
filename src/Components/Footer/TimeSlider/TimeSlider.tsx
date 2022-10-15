import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

const TimeSlider = () => {

  const [timeValue, setTimeValue] = useState(0);

  return (
    <Box sx={{width: 300}}>
      <Stack spacing={2} direction='row' alignItems='center'>
        <Slider aria-label='TrackTime' value={timeValue} />
      </Stack>
    </Box>
  )
}

export default TimeSlider;