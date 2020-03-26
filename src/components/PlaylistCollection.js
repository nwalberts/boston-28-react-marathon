import React, { useState } from 'react'

import Playlist from './Playlist.js'

const PlaylistCollection = (props) => {
    const [getClickStatus, setClickStatus] = useState(null);
    
    const playlistArr = props.playlistData.map((playlistObj) => {
      
      const clickHandler = (event) => {
        setClickStatus(playlistObj.id)
      }
      
      let headerClassName = null;
      // needs to be in .map for scope

      if (playlistObj.id === getClickStatus) {
        headerClassName = "selected"
      }

      
        return (
            <Playlist
                key={playlistObj.id}
                playlist={playlistObj}
                buttonClick={clickHandler}
                headerClassName={headerClassName}
            />
        )
    })

    return (
        <div className="cell small-6">
            <h1>Playlist</h1>
            {playlistArr}
        </div>
    )
}


export default PlaylistCollection