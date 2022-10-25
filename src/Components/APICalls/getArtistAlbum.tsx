import { parseISO } from "date-fns/esm";
import isAfter from "date-fns/isAfter";
import { AlbumObjectFull } from '../Util/modals';

export default async function getArtistAlbum(artistID: string, token:string ) {
  
  const url = `https://api.spotify.com/v1/artists/${artistID}/albums?limit=50&market=CA`;

  const requestOptions = {
    method: 'GET', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }

  // manage the data:
  // 1) sort by earliest to oldest as default
  // 2) filter by Albums, Singles, Other

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    let dataPayload = data;
    let numAlbums = 50;
    let nextUrl = data.next;

    while (data.total > numAlbums) {
      const response = await fetch(nextUrl, requestOptions)
      const data = await response.json();
      nextUrl = data.next;
      dataPayload.items.push(...data.items);
      dataPayload.next = data.next;
      dataPayload.offset = data.offset;
      numAlbums += 50;
    }

    // sorts the response by date. Earliest to latest
    const dataAll: AlbumObjectFull[] = dataPayload.items.sort((a: any, b: any) => {
      const aDate = a.release_date;
      const bDate = b.release_date;

      if (isAfter(parseISO(aDate), parseISO(bDate))){
        return -1;
      } else {
        return 1;
      }
    });

    // returns albums only, sorted
    const dataAlbums: AlbumObjectFull[] = dataAll.reduce((albums:any, dataInput: any) => {
      if (dataInput.album_group === 'album'){
        return [...albums, dataInput]
      }
      return [...albums];
    }, [])
    // returns singles only
    const dataSingles: AlbumObjectFull[] = dataAll.reduce((singles:any, dataInput: any) => {
      if (dataInput.album_group === 'single'){
        return [...singles, dataInput]
      }
      return [...singles];
    }, [])
    // returns all other data
    const dataOthers: AlbumObjectFull[] = dataAll.reduce((other:any, dataInput: any) => {
      if (dataInput.album_group === 'appears_on'){
        return [...other, dataInput]
      }
      return [...other];
    }, [])

    return {dataAll, dataAlbums, dataSingles, dataOthers};
  } catch (err) {
    throw err;
  }
}