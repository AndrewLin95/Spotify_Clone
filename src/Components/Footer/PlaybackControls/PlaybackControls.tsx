import { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';

interface Props{
  handleNextTrack: () => void;
}

const PlaybackControls:FC<Props> = ({handleNextTrack}) => {
  return(
    <Box sx={{width: 300, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Stack spacing={1} direction='row' alignItems='center'>
        <FastRewindRounded />
        <PauseRounded/>
        <FastForwardRounded><div ></div></FastForwardRounded>
      </Stack>
    </Box>
  )
}

export default PlaybackControls;