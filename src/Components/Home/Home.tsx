import { FC } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import './style.css';

  // below is required to use custom mui themes
  const theme = useTheme();

  const Item = styled(Paper)({
    '&.MuiPaper-root': {
      backgroundColor: theme.customPalette.background.secondary1,
      color: theme.palette.grey[200],
      padding: theme.spacing(0),
      textAlign: 'center',
    }
  })
interface Props{
  userPlaylist: SpotifyApi.PlaylistObjectSimplified[]
}

const Home: FC<Props> = ({ userPlaylist }) => {
  return (
    <div>
      <div id='homeAlbumHeader'>Albums</div>
      <Stack id="homeContainer">
        {Object.entries(userPlaylist).map(([key, value]) => {
          return(
            <Item className='homeAlbumContainer' key={key}>
              <img className='homeAlbumImage' src={value.images[0].url}></img>
              <div className='homeAlbumText'>{value.name}</div>
            </Item>
          )
        })}
      </Stack>
    </div>
  )
}

export default Home;