import { FC, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

import { Link } from 'react-router-dom';
import CardImage from '../../../GeneralComponents/CardImage'
import CardContentAlbum from '../../../GeneralComponents/CardContentAlbum';
import { tracksInterfaceAlbum, AlbumObjectFull } from '../../../Util/modals';
import getRecommendationAlbum from '../../../APICalls/getRecommendationAlbum';

interface Props {
  token: string,
  albumTracks: tracksInterfaceAlbum[],
  handleTrackPress: (trackURI: string, key: string) => void,
  handleAlbumClick: (value: any) => void,
  handleArtistClick: (artistID: string) => void,
}

const MusicTracksAlbumRec:FC<Props> = ({ token, albumTracks, handleTrackPress, handleAlbumClick, handleArtistClick }) => {
  
  const musicRecAlbumsInterface = [] as AlbumObjectFull[]
  const [musicRecAlbums, setMusicRecAlbums] = useState<AlbumObjectFull[]>(musicRecAlbumsInterface);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (albumTracks === undefined){
      return;
    }
    async function _getRecommendationsAlbum(){
      const data = await getRecommendationAlbum(token, albumTracks);
      setMusicRecAlbums(data.items);
      setLoading(false);
    }
    _getRecommendationsAlbum();
  }, [albumTracks])

  return (
    <>
      {loading ? 
        null :
        <div className='darkBackground'>
        <div className='discographyHeader'>More by {musicRecAlbums[0].artists[0].name}</div>
        <Stack className='cardContainer artistCardMain'>
          {Object.entries(musicRecAlbums).map(([key,value]) => {
            return(
              <Link
                key={key}
                className='homeCardContainer artistCardContainer'
                onClick={() => {handleAlbumClick(value)}}
                to={'/playlist'}
                style={{textDecoration: 'none'}}
              > 
                <Card>
                  <CardActionArea>
                    <CardImage imgUrl={value.images[0].url}/>
                    <CardContentAlbum 
                      valueAlbumName={value.name} 
                      releaseDate={value.release_date} 
                      type={value.album_group}
                    />
                  </CardActionArea>
                </Card>
              </Link>
            )
          })}
        </Stack>
      </div>
      }
    </>
  )
}

export default MusicTracksAlbumRec;