import { FC, useState, useEffect } from 'react';
import ArtistHeader from "./ArtistHeader/ArtistHeader";
import getArtist from '../APICalls/getArtist';

interface Props{
  artistID: string,
  token: string,
}

const Artists:FC<Props> = ({ artistID, token }) => {
  const [artistData, setArtistData] = useState();

  useEffect(() => {
    async function getArtistInfo() {
      const data = await getArtist(artistID, token);
      console.log(data);
      setArtistData(data);
    }
    getArtistInfo();
  }, [artistID])

  return (
    <div className="mainContainer">
      <ArtistHeader artistData={artistData}/>
    </div>
  )
}

export default Artists;