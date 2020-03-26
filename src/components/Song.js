import React from "react"

const Song = (props) => {

  let songClassName = null 

  if (props.selectedStatus === true){
    songClassName = "selected"
  }

  return(
    <p onClick={props.songHandler} className={songClassName}>
      {props.songInfo.name} - {props.songInfo.artist} 
    </p>
  )
}

export default Song