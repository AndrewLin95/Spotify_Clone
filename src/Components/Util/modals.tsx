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

export default interface PlaylistTrackObjectFull {
  added_at: string;
  added_by: SpotifyApi.UserObjectPublic;
  is_local: boolean;
  track: TrackObjectFull;
}