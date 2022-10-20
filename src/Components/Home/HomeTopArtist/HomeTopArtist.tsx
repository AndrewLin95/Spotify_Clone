import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

interface Props{
  userTopArtists: SpotifyApi.ArtistObjectFull[],
  handleArtistClick: (artistURI: string) => void,
}

const HomeTopArtist:FC<Props> = ({ userTopArtists, handleArtistClick }) => {
  return (
    <>
      <div className='homeCategoryHeader'>Your Top Artists</div>
      <Stack className='cardContainer'>
        {Object.entries(userTopArtists).map(([key, value]) => {
          return (
            <Link 
              key={key} 
              className='homeCardContainer' 
              to={'/artists'} 
              onClick={() => {handleArtistClick(value.id)}}
            >
              <Card>
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
            </Link>
          )
        })}
      </Stack>
    </>
  )
}

export default HomeTopArtist;