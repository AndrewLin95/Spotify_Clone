import { FC } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface Props{
  userFeatured: SpotifyApi.PlaylistObjectSimplified[],
  handlePlaylistClick: (value: SpotifyApi.PlaylistObjectSimplified) => void;
}

const HomeFeatured:FC<Props> = ({ userFeatured, handlePlaylistClick }) => {
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
      <div className='homeCategoryHeader'>Spotify Featured Playlists</div>
      <Stack id="playlistContainer">
        {Object.entries(userFeatured).map(([key, value]) => {
          return(
            <Link className='linkPlaylist' to={'/playlist'} key={key} style={{textDecoration: 'none'}}>
              <Item className='homePlaylistContainer' onClick={() => {handlePlaylistClick(value)}}>
                <img className='homePlaylistImage' src={value.images[0].url}></img>
                <div className='homePlaylistText'>{value.name}</div>
              </Item>
            </Link>
          )
        })}
      </Stack>
    </>
  )
}

export default HomeFeatured;