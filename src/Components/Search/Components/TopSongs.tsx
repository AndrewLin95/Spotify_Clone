import { FC } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import formatTime from '../../Util/formatTime';

import TrackHeaderAssorted from '../../GeneralComponents/TrackHeaderAssorted';
import TrackTitleFullShort from '../../GeneralComponents/TrackTitleFullShort';
import TrackAlbumName from '../../GeneralComponents/TrackAlbumName';
import TrackDuration from '../../GeneralComponents/TrackDuration';

interface Props {
  tracks: SpotifyApi.TrackObjectFull[];
  handleAlbumClick: (value: any) => void;
  handleArtistClick: (artistID: string) => void;
}

const TopSongs: FC<Props> = ({
  tracks,
  handleAlbumClick,
  handleArtistClick
}) => {
  return (
    <div className="mainContainerTopSongs">
      <div className="searchCategoryHeader">Top Tracks</div>
      <TableContainer>
        <Table className="tableMain">
          <TrackHeaderAssorted />

          <TableBody>
            {Object.entries(tracks).map(([key, value]) => {
              const formattedTime = formatTime(value.duration_ms);
              return (
                <TableRow key={key} className="tableRow">
                  <TrackTitleFullShort
                    albumImg={value.album.images[2].url}
                    trackName={value.name}
                    artistName={value.artists[0].name}
                    artistID={value.artists[0].id}
                    handleArtistClick={handleArtistClick}
                  />
                  <TrackAlbumName
                    handleAlbumClick={handleAlbumClick}
                    album={value.album}
                    albumName={value.album.name}
                  />
                  <TrackDuration formattedTime={formattedTime} />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TopSongs;
