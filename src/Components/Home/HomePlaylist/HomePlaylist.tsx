import { FC } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import './style.css';

interface Props{
  userPlaylist: SpotifyApi.PlaylistObjectSimplified[],
}

const HomePlaylist:FC<Props> = ({ userPlaylist }) => {
  // below is required to use custom mui themes
  const theme = useTheme();

  const Item = styled(Paper)({
    '&.MuiPaper-root': {
      backgroundColor: theme.customPalette.background.secondary1,
      color: theme.palette.grey[200],
    }
  })

  return (
    <>
      <div className='homeCategoryHeader'>Playlists</div>
      <Stack id="playlistContainer">
        {Object.entries(userPlaylist).map(([key, value]) => {
          return(
            <Item className='homePlaylistContainer' key={key}>
              <img className='homePlaylistImage' src={value.images[0].url}></img>
              <div className='homePlaylistText'>{value.name}</div>
            </Item>
          )
        })}
      </Stack>
    </>
  )
}

export default HomePlaylist;