import { FC } from 'react';
import CardContent from '@mui/material/CardContent';

interface Props{
  valueName: string,
}

const CardContentSimple:FC<Props> = ({ valueName }) => {
  return(
    <CardContent>
      <div className='homeCardName'>{valueName}</div>
    </CardContent>
  )
}

export default CardContentSimple;
