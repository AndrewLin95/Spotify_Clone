import { FC } from 'react';

interface Props{
  userRecommendedArtists: SpotifyApi.ArtistObjectFull[],
}

const HomeRecommendedArtist:FC<Props> = ({ userRecommendedArtists }) => {
  return (
    <div></div>
  )
}

export default HomeRecommendedArtist;