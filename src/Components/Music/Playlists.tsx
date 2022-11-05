import { FC, useEffect, useState } from 'react';
import MusicHeader from './MusicHeader/MusicHeader';
import MusicTracks from './MusicTracks/MusicTracks';
import MusicRecommendations from './MusicRecommendations/MusicRecommendations';
import { tracksInterface, tracksInterfaceAlbum, currPlaylistAlbumInterface } from '../Util/modals';
import pullPlaylistTracks from '../APICalls/pullPlaylistTracks';
import MusicTracksSkeleton from '../Skeleton/MusicTracksSkeleton';

interface Props{
  currPlaylistAlbum: currPlaylistAlbumInterface,
  token: string,
  handleTrackPress: (trackURI: string, key: string) => void,
  handleAlbumClick: (value: any) => void,
  handleArtistClick: (artistID: string) => void,
}

const Playlists:FC<Props> = ({ currPlaylistAlbum, token, handleTrackPress, handleAlbumClick, handleArtistClick }) => {
  const pagingObject = {} as tracksInterface[]
  const [tracks, setTracks] = useState<tracksInterface[]>(pagingObject);
  const [loadingTracks, setLoadingTracks] = useState<boolean>(true);

  const pagingObjectAlbum = {} as tracksInterfaceAlbum
  const [albumTracks, setAlbumTracks] = useState<tracksInterfaceAlbum>(pagingObjectAlbum)

  useEffect(() =>{
    setLoadingTracks(true);

    async function getPlaylistTrackInfo() {
      const data = await pullPlaylistTracks(currPlaylistAlbum.urlID, token, currPlaylistAlbum.type);
      if (currPlaylistAlbum.type === 'playlist'){
        setTracks(data.transformedData);
        setAlbumTracks(pagingObjectAlbum);
      } else if (currPlaylistAlbum.type === 'album'){
        setAlbumTracks(data.transformedData);
        setTracks(pagingObject);
      }
      setLoadingTracks(data._loadingTracks);
    }

    getPlaylistTrackInfo();
  }, [currPlaylistAlbum]);

  useEffect(() => {
    console.log('TRACKS', tracks);
  }, [tracks])

  return (
    <div className="mainContainer">
      <MusicHeader currPlaylistAlbum={currPlaylistAlbum} />
      {loadingTracks ? 
        <MusicTracksSkeleton /> : 
        <>
          <MusicTracks 
            currPlaylistAlbum={currPlaylistAlbum} 
            tracks={tracks} 
            albumTracks={albumTracks}
            handleTrackPress={handleTrackPress} 
            handleAlbumClick={handleAlbumClick}
            handleArtistClick={handleArtistClick}
          />
          {currPlaylistAlbum.type === 'playlist' ? 
            <MusicRecommendations 
            token={token}
            tracks={tracks}
            handleTrackPress={handleTrackPress} 
            handleAlbumClick={handleAlbumClick}
            handleArtistClick={handleArtistClick}
          /> :
          null
        }

        </>
      }
    </div>
  )
}

export default Playlists; 