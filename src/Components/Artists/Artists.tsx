import { FC, useState, useEffect } from 'react';
import ArtistHeader from "./ArtistHeader/ArtistHeader";
import getArtist from '../APICalls/getArtist';

interface Props{
  artistID: string,
  token: string,
}

const Artists:FC<Props> = ({ artistID, token }) => {

  useEffect(() => {
    async function getArtistInfo() {
      const data = await getArtist(artistID, token);
      console.log(data);
    }
    getArtistInfo();
  }, [artistID])

  return (
    <div className="mainContainer">
      <ArtistHeader />
    </div>
  )
}

export default Artists;