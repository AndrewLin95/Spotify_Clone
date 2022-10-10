import { FC } from 'react';

interface Props{
  userRecentlyPlayedTrack: SpotifyApi.PlayHistoryObject[]
}

const HomeRecentlyPlayedTrack:FC<Props> = ({ userRecentlyPlayedTrack }) => {
  return (
    <div>

    </div>
  )
}

export default HomeRecentlyPlayedTrack;