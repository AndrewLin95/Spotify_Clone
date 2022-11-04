import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

import CardImage from '../../GeneralComponents/CardImage';
import CardContentSimple from '../../GeneralComponents/CardContentSimple';

interface Props{
  userTopArtists: SpotifyApi.ArtistObjectFull[],
  handleArtistClick: (artistURI: string) => void,
}

const HomeTopArtist:FC<Props> = ({ userTopArtists, handleArtistClick }) => {
  console.log(userTopArtists);
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
              style={{textDecoration: 'none'}}
            >
              <Card>
                <CardActionArea>
                  <CardImage imgUrl={value.images[0].url}/>
                  <CardContentSimple valueName={value.name}/>
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