import { FC } from 'react';
import './style.css';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

interface Props{
  userRecommendedArtists: SpotifyApi.ArtistObjectFull[],
}

const HomeRecommendedArtist:FC<Props> = ({ userRecommendedArtists }) => {
  return (
    <>
      <div className='homeCategoryHeader'>Your Recommended Artists</div>
      <Stack className='cardContainer'>
        {Object.entries(userRecommendedArtists).map(([key,value]) => {
          return (
            <Card key={key} className='homeCardContainer'>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={value.images[0].url}
                />
                <CardContent>
                  <div className='homeCardName'>{value.name}</div>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
      </Stack>
    </>
  )
}

export default HomeRecommendedArtist;