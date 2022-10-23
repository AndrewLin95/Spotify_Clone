import { useEffect } from "react";

const getTrack = (trackID: string, token: string) => {

  async function _getTrack() {
    const url = `https://api.spotify.com/v1/tracks/${trackID}`;
    
    const requestOptions = {
      method: 'GET',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();

    } catch (err) {
      throw (err);
    }
  }

  useEffect(() => {
    _getTrack();
  }, [])

}

export default getTrack;