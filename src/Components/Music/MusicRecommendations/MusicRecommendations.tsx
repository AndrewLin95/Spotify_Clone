import { FC, useState, useEffect } from 'react';
import getRecommendations from '../../APICalls/getRecommendations';
import { tracksInterface, tracksInterfaceRec } from '../../Util/modals';

interface Props {
  token: string;
  tracks: tracksInterface[];
}

const MusicRecommendations:FC<Props> = ({ token, tracks }) => {
  
  const musicRecTracksInterface = [] as tracksInterfaceRec[];
  const [musicRecTracks, setMusicRecTracks] = useState<tracksInterfaceRec[]>(musicRecTracksInterface);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (tracks === undefined){
      return;
    }
    async function _getRecommendations() {
      const data = await getRecommendations(token, tracks);

      setMusicRecTracks(data);
      setLoading(false);
    }
    _getRecommendations();
  }, [tracks])
  
  
  return(
    <div>
      
    </div>
  )
}

export default MusicRecommendations;