import { FC } from 'react';

interface Props{
  userTopArtists: SpotifyApi.ArtistObjectFull[]
}

const HomeTopArtist:FC<Props> = ({ userTopArtists }) => {
  return (
    <div></div>
  )
}

export default HomeTopArtist;