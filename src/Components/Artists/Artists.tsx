import { FC, useState, useEffect } from 'react';
import ArtistHeader from "./ArtistHeader/ArtistHeader";
import ArtistContent from './ArtistContent/ArtistContent';
import getArtist from '../APICalls/getArtist';

interface Props{
  artistID: string,
  token: string,
}

const Artists:FC<Props> = ({ artistID, token }) => {
  const artistDataInterface = {} as SpotifyApi.ArtistObjectFull    
  const [artistData, setArtistData] = useState<SpotifyApi.ArtistObjectFull>(artistDataInterface);
  const [loadingData, setLoadingData] = useState<boolean>(true);

  useEffect(() => {
    setLoadingData(true);
    async function getArtistInfo() {
      const data = await getArtist(artistID, token);
      console.log(data);
      setArtistData(data);
      setLoadingData(false);
    }
    getArtistInfo();
  }, [artistID])

  if (loadingData){
    return null;
  }

  return (
    <div className="mainContainer">
      <ArtistHeader artistData={artistData}/>
      <ArtistContent />
    </div>
  )
}

export default Artists;