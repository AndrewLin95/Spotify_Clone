import { FC, useState, useEffect } from 'react';
import ArtistHeader from "./ArtistHeader/ArtistHeader";
import ArtistContent from './ArtistContent/ArtistContent';
import getArtist from '../APICalls/getArtist';
import getArtistTopTrack from '../APICalls/getArtistTopTrack';
import getArtistAlbum from '../APICalls/getArtistAlbum';
import { ArtistAlbum } from '../Util/modals';
import ArtistHeaderSkeleton from '../Skeleton/ArtistHeaderSkeleton';
import MusicTracksSkeleton from '../Skeleton/MusicTracksSkeleton';

interface Props{
  artistID: string,
  token: string,
  handleTrackPress: (trackURI: string, key: string) => void,
  handleAlbumClick: (value: any) => void,
}

const Artists:FC<Props> = ({ artistID, token, handleTrackPress, handleAlbumClick }) => {
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
      {loadingData? 
      <>
        <ArtistHeaderSkeleton />
        <MusicTracksSkeleton />
      </>
      :
      <>
        <ArtistHeader artistData={artistData}/>
        <ArtistContent 
          artistTopTracks={artistTopTracks} 
          handleTrackPress={handleTrackPress} 
          artistAlbums={artistAlbums}
          handleAlbumClick={handleAlbumClick}
        />
      </>
    }
      

    </div>
  )
}

export default Artists;