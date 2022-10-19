import { FC, useEffect, useState } from 'react';
import MusicHeader from './MusicHeader/MusicHeader';
import MusicTracks from './MusicTracks/MusicTracks';
import usePullTracks from '../APICalls/usePullTracks';
import PlaylistTrackObjectFull from '../Util/modals';
import pullTracks from '../APICalls/pullTracks';

interface Props{
  currPlaylistAlbum: {
    image: string,
    type: string,
    name: string,
    owner_name: string,
    totalTracks: string,
    uri: string,
    urlID: string,
  },
  token: string,
  handleTrackPress: (trackURI: string, key: string) => void,
  handleAlbumClick: (value: any) => void;
}

const Playlists:FC<Props> = ({ currPlaylistAlbum, token, handleTrackPress, handleAlbumClick }) => {
  const pagingObject = {} as PlaylistTrackObjectFull[]
  const [tracks, setTracks] = useState<PlaylistTrackObjectFull[]>(pagingObject);
  const [loadingTracks, setLoadingTracks] = useState<boolean>(true);

  useEffect(() =>{
    async function getTrackInfo() {
      const data = await pullTracks(currPlaylistAlbum.urlID, token);
      
      setTracks(data.dataPayload);
      setLoadingTracks(data._loadingTracks);
    }
    getTrackInfo();
  }, [currPlaylistAlbum]);


  return (
    <div className="mainContainer">
      <MusicHeader currPlaylistAlbum={currPlaylistAlbum} />
      {loadingTracks ? 
        null : 
        <MusicTracks 
          currPlaylistAlbum={currPlaylistAlbum} 
          tracks={tracks} 
          handleTrackPress={handleTrackPress} 
          handleAlbumClick={handleAlbumClick}
        />
      }
    </div>
  )
}

export default Playlists; 