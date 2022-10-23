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
import RepeatOneOn from '@mui/icons-material/RepeatOneOn';

interface Props{
  player: any,
  is_paused: boolean,
  handleShuffleState: () => void,
  shuffleState: boolean,
  handleRepeatState: () => void,
  repeatState: string,
}

const _repeatState = {
  OFF: 'off',
  CONTEXT: 'context',
  TRACK: 'track',
}

const PlaybackControls:FC<Props> = ({ player, is_paused, handleShuffleState, shuffleState, handleRepeatState, repeatState }) => {
  return(
    <Box sx={{width: 300, height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Stack spacing={1} direction='row' alignItems='center'>
        <div onClick={handleShuffleState}> { shuffleState ? <ShuffleOn fontSize='small' /> : <Shuffle fontSize='small'/> } </div>
        <div onClick={() => {player.previousTrack()}}><FastRewindRounded /></div>
        <div onClick={() => {player.togglePlay()}}>
          {is_paused ? <PlayArrowRounded fontSize='large' /> : <PauseRounded fontSize='large'/> }
        </div>
        <div onClick={() => {player.nextTrack()}}><FastForwardRounded /></div>
        <div onClick={handleRepeatState}> 
          {(() => {
            switch (repeatState) {
              case _repeatState.OFF:
                return <Repeat fontSize='small' /> 
              case _repeatState.CONTEXT:
                return <RepeatOn fontSize='small' />
              case _repeatState.TRACK:
                return <RepeatOneOn fontSize='small' />
            };
          })()}
        </div>
      </Stack>
    </Box>
  )
}

export default PlaybackControls;