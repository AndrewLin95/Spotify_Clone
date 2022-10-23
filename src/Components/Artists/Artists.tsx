import { FC, useState, useEffect } from 'react';
import ArtistHeader from "./ArtistHeader/ArtistHeader";
import ArtistContent from './ArtistContent/ArtistContent';
import getArtist from '../APICalls/getArtist';
import getArtistTopTrack from '../APICalls/getArtistTopTrack';
import getArtistAlbum from '../APICalls/getArtistAlbum';
import { ArtistAlbum } from '../Util/modals';

interface Props{
  artistID: string,
  token: string,
  handleTrackPress: (trackURI: string, key: string) => void,
}

const Artists:FC<Props> = ({ artistID, token, handleTrackPress }) => {
  const artistDataInterface = {} as SpotifyApi.ArtistObjectFull    
  const [artistData, setArtistData] = useState<SpotifyApi.ArtistObjectFull>(artistDataInterface);

  const trackObjectInterface = {} as {tracks: SpotifyApi.TrackObjectFull[]}
  const [artistTopTracks, setArtistTopTracks] = useState<{tracks: SpotifyApi.TrackObjectFull[]}>(trackObjectInterface);

  const artistAlbumInterface = {} as ArtistAlbum
  const [artistAlbums, setArtistAlbums] = useState(artistAlbumInterface);

  const [loadingData, setLoadingData] = useState<boolean>(true);

  useEffect(() => {
    setLoadingData(true);
    async function getArtistInfo() {
      const _artistData = await getArtist(artistID, token);
      const _artistTopTracks = await getArtistTopTrack(artistID, token);
      const _artistAlbums = await getArtistAlbum(artistID, token);

      console.log('LOOKATTHIS', _artistAlbums)

      console.log('artist toptracks', _artistTopTracks);

      setArtistData(_artistData);
      setArtistTopTracks(_artistTopTracks);
      setArtistAlbums(_artistAlbums);
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
      <ArtistContent 
        artistTopTracks={artistTopTracks} 
        handleTrackPress={handleTrackPress} 
        artistAlbums={artistAlbums}/>
    </div>
  )
}

export default Artists;