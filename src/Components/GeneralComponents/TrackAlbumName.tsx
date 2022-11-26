import { FC } from 'react';
import TableCell from '@mui/material/TableCell';
import { Link } from 'react-router-dom';

interface Props {
  handleAlbumClick: (value: any) => void;
  album: any;
  albumName: any;
}

const TrackAlbumName: FC<Props> = ({ handleAlbumClick, album, albumName }) => {
  return (
    <Link
      to={'/playlist'}
      onClick={() => {
        handleAlbumClick(album);
      }}
      style={{ textDecoration: 'none' }}
    >
      <TableCell className="tableAlbum">{albumName}</TableCell>
    </Link>
  );
};

export default TrackAlbumName;
