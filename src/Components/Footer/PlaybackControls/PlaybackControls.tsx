import { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';

interface Props{
  player: any,
  is_paused: boolean
}

const PlaybackControls:FC<Props> = ({ player, is_paused }) => {
  return(
    <Box sx={{width: 300, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Stack spacing={1} direction='row' alignItems='center'>
        <div onClick={() => {player.previousTrack()}}><FastRewindRounded /></div>
        <div onClick={() => {player.togglePlay()}}>
          {is_paused ? <PlayArrowRounded /> : <PauseRounded /> }
        </div>
        <div onClick={() => {player.nextTrack()}}><FastForwardRounded /></div>
        
      </Stack>
    </Box>
  )
}

export default PlaybackControls;