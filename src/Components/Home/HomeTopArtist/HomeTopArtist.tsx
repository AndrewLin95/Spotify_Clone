import { FC } from 'react';
import './style.css';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

interface Props{
  userTopArtists: SpotifyApi.ArtistObjectFull[]
}

const HomeTopArtist:FC<Props> = ({ userTopArtists }) => {
  return (
    <>
      <div id='homeTopArtistHeader'>Your Top Artists</div>
      <Stack id='topArtistContainer'>
        {Object.entries(userTopArtists).map(([key, value]) => {
          return (
            <Card key={key} className='homeTopArtistContainer'>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={value.images[0].url}
                />
                <CardContent>
                  <div className='homeTopArtistName'>{value.name}</div>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
      </Stack>
    </>
  )
}

export default HomeTopArtist;