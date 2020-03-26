import React from 'react'
import PlaylistCollection from "./PlaylistCollection"

const App = (props) => {
  return (
    <div className="grid-container app grid-x">
      <h2 className="title">React Music Player</h2>

      <PlaylistCollection 
        playlistData={props.data.playlists}
      />

      <div className="cell small-6">
        <h1>Songs</h1>
        <p>{props.data.songs[0].name}</p>
      </div>
      
    </div>
    

  );
} 

export default App
