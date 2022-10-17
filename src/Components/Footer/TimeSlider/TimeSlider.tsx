import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import getTrack from '../../APICalls/getTrack';

interface Props{
  is_paused: boolean,
  trackPosition: number,
  current_track: any,
  token: string,
}

const TimeSlider:FC<Props> = ({ is_paused, trackPosition, current_track, token }) => {

  const [timeValue, setTimeValue] = useState(0);
  const [trackDuration, setTrackduation] = useState(200);

  useEffect(() => {
    if (is_paused) {
      return;
    }
    const interval = setInterval(() => setTimeValue(timeValue + 1), 1000)
    return () => clearInterval(interval);
  })

  useEffect(() => {
    const trackPositionSeconds = trackPosition / 1000;
    setTimeValue(trackPositionSeconds);
  }, [trackPosition])

  useEffect(() => {
    if (current_track === undefined){
      return;
    }
    const _trackDuration = current_track.duration_ms / 1000;
    setTrackduation(_trackDuration);
  }, [current_track])

  return (
    <Box sx={{width: 300}}>
      <Stack spacing={2} direction='row' alignItems='center'>
        <Slider aria-label='TrackTime' value={timeValue} max={trackDuration} />
      </Stack>
    </Box>
  )
}

export default TimeSlider;