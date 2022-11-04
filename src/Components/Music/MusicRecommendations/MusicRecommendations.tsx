import { FC, useState, useEffect } from 'react';
import getRecommendations from '../../APICalls/getRecommendations';
import { tracksInterface } from '../../Util/modals';

interface Props {
  token: string;
  tracks: tracksInterface;
}

const MusicRecommendations:FC<Props> = ({ token, tracks }) => {
  
  useEffect(() => {
    
    async function _getRecommendations() {
      const data = await getRecommendations(token, tracks);
    }

    _getRecommendations();

  }, [])
  
  
  return(
    <div>

    </div>
  )
}

export default MusicRecommendations;