import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

import CardImage from '../../GeneralComponents/CardImage';
import CardContentSimple from '../../GeneralComponents/CardContentSimple';

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
                <CardImage imgUrl={value.images[0].url}/>
                <CardContentSimple valueName={value.name}/>
              </CardActionArea>
            </Card>
          )
        })}
      </Stack>
    </>
  )
}

export default HomeRecommendedArtist;