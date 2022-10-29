import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// TODOs:

// 1) footer right component  DONE, maybe add more stuff to it?
// 2) interfaces
// 3) Left nav bar            
// 4) profile + logout button
// 5) more info for artist page
// 6) recommended track information (for playlists, albums). need to fill in gap
// 7) gif for playing music when a track is playing? <- maybe
// 8) pull albums API needs to pull all items past 50 too      DONE
// 9) Search functionality
// 10) Loading stuff. Look at mui 