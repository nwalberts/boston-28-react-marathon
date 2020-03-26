import React, { useState } from "react"

import Song from "./Song"

const SongCollection = (props) => {
  const [getSelectedSongId, setSelectedSongId] = useState(null)

  console.log(getSelectedSongId)

  const songComponents = props.songData.map((songObject) => {

    const songHandler = () => {
      return setSelectedSongId(songObject.id)
    }

    let selectedStatus = false
    if (songObject.id === getSelectedSongId){
      selectedStatus = true
    }

    return(
      <Song 
        key={songObject.id}
        songInfo={songObject}
        songHandler={songHandler}
        selectedStatus={selectedStatus}
      />
    )
  })

  return(
    <div className="cell small-6">
      <h1>Songs</h1>

      {songComponents}
    </div>
  )
}

export default SongCollection