import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import MusicRowSkeleton from './MusicRowSkeleton';
import TrackHeaderFull from '../GeneralComponents/TrackHeaderFull';
import { skeletonObject } from '../Util/objects';

const MusicTracksSkeleton = () => {

  return (
    <TableContainer>
      <Table className='tableMain'>

        <TrackHeaderFull />

        <TableBody>
          {Object.entries(skeletonObject).map(([, value]) => {
            return(
              <MusicRowSkeleton key={value}/>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MusicTracksSkeleton;