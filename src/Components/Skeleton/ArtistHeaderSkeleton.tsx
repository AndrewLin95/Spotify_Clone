import Skeleton from "@mui/material/Skeleton";

const ArtistHeaderSkeleton = () => {
  return(
    <div className='musicHeaderMain'>
      <div className='musicHeaderContainer'>
        <Skeleton variant="rectangular" height={200} width={200}/>
        <div className='musicHeaderText'>
          <div className='musicHeaderName'>
            <Skeleton variant="rectangular" height={50} width={400}/>
          </div>
          <div className='musicHeaderInfo'>
            <Skeleton variant="rectangular" height={40} width={300}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistHeaderSkeleton;