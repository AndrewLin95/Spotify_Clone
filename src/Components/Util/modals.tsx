interface TrackObjectFull {
  album: SpotifyApi.AlbumObjectSimplified;
  external_ids: SpotifyApi.ExternalIdObject;
  popularity: number;
  artists: SpotifyApi.ArtistObjectSimplified[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: SpotifyApi.ExternalUrlObject;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: SpotifyApi.TrackLinkObject;
  name: string;
  preview_url: string;
  track_number: number;
  type: 'track';
  uri: string;
}

export interface PlaylistTrackObjectFull {
  added_at: string;
  added_by: SpotifyApi.UserObjectPublic;
  is_local: boolean;
  track: TrackObjectFull;
}

export interface tracksInterface {
  addedDate: string,
  trackDuration: number,
  albumImg: string,
  trackName: string,
  artistName: string,
  album: any,
}

export interface tracksInterfaceAlbum {
  trackDuration: number,
  trackName: string,
  artistName: string,
  album: string,
}

export interface tracksInterfaceRec {
  trackDuration: number,
  trackName: string,
  artistName: string,
  album: any,
  albumImg: string,
}

export interface currPlaylistAlbumInterface {
  image: string,
  type: string,
  name: string,
  owner_name: string,
  totalTracks: string,
  uri: string,
  urlID: string,
}

interface WebPlaybackTrack {
  uri: string, // Spotify URI
  id: string,                // Spotify ID from URI (can be null)
  type: string,             // Content type: can be "track", "episode" or "ad"
  media_type: string,       // Type of file: can be "audio" or "video"
  name: string,         // Name of content
  is_playable: true,         // Flag indicating whether it can be played
  album: {
    uri: string, // Spotify Album URI
    name: string,
    images: [
      { url: string }
    ]
  },
  artists: [
    { uri: string, name: string }
  ]
}

export default interface WebPlaybackState {
  context: {
    uri: 'spotify:album:xxx', // The URI of the context (can be null)
    metadata: {},             // Additional metadata for the context (can be null)
  },
  disallows: {                // A simplified set of restriction controls for
    pausing: false,           // The current track. By default, these fields
    peeking_next: false,      // will either be set to false or undefined, which
    peeking_prev: false,      // indicates that the particular operation is
    resuming: false,          // allowed. When the field is set to `true`, this
    seeking: false,           // means that the operation is not permitted. For
    skipping_next: false,     // example, `skipping_next`, `skipping_prev` and
    skipping_prev: false      // `seeking` will be set to `true` when playing an
                              // ad track.
  },
  paused: false,  // Whether the current track is paused.
  position: 0,    // The position_ms of the current track.
  repeat_mode: 0, // The repeat mode. No repeat mode is 0,
                  // repeat context is 1 and repeat track is 2.
  shuffle: false, // True if shuffled, false otherwise.
  track_window: {
    current_track: any,                              // The track currently on local playback
    previous_tracks: any, // Previously played tracks. Number can vary.
    next_tracks: any,      // Tracks queued next. Number can vary.
  }
}

export interface AlbumObjectFull {
  album_group: string,
  album_type: string,
  artists: SpotifyApi.ArtistObjectSimplified[],
  external_urls: SpotifyApi.ExternalUrlObject,
  href: string,
  id: string,
  images: SpotifyApi.ImageObject[],
  name: string,
  release_date: string,
  release_date_precision: string,
  total_tracks: number,
  type: string,
  uri: string,
}

export interface ArtistAlbum{
  dataAll: AlbumObjectFull[];
  dataAlbums: AlbumObjectFull[];
  dataSingles: AlbumObjectFull[];
  dataOthers: AlbumObjectFull[];
}

export interface dataHomePageInterface{
  dataHomePagePlaylist: SpotifyApi.PlaylistObjectSimplified[];
  dataHomePageTopArtist: SpotifyApi.ArtistObjectFull[];
  dataRelatedArtists: SpotifyApi.ArtistObjectFull[];
  dataFeatured: SpotifyApi.PlaylistObjectSimplified[];
}