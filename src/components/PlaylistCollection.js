import React from 'react'

import Playlist from './Playlist.js'

const PlaylistCollection = (props) => {

    const playlistArr = props.playlistData.map((playlistObj) => {
        return (
            <Playlist
                key={playlistObj.id}
                playlist={playlistObj}
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