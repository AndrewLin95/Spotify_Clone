import { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import Shuffle from '@mui/icons-material/Shuffle';
import ShuffleOn from '@mui/icons-material/ShuffleOn';
import Repeat from '@mui/icons-material/Repeat';
import RepeatOn from '@mui/icons-material/RepeatOn';
import RepeatOne from '@mui/icons-material/RepeatOne';

interface Props{
  player: any,
  is_paused: boolean
}

const PlaybackControls:FC<Props> = ({ player, is_paused }) => {
  return(
    <Box sx={{width: 300, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Stack spacing={1} direction='row' alignItems='center'>
        <div> <Shuffle fontSize='small' /> </div>
        <div onClick={() => {player.previousTrack()}}><FastRewindRounded /></div>
        <div onClick={() => {player.togglePlay()}}>
          {is_paused ? <PlayArrowRounded fontSize='large' /> : <PauseRounded fontSize='large'/> }
        </div>
        <div onClick={() => {player.nextTrack()}}><FastForwardRounded /></div>
        <div> <Repeat fontSize='small'/> </div>
      </Stack>
    </Box>
  )
}

export default PlaybackControls;