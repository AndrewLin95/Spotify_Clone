import { FC } from 'react';
import CardMedia from '@mui/material/CardMedia';

interface Props{
  imgUrl: string;
}

const CardImage:FC<Props> = ({ imgUrl }) => {
  return(
    <CardMedia
      component='img'
      image={imgUrl}
    />
  )
}

export default CardImage;
