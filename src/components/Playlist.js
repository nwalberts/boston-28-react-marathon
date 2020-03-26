import React from 'react'

const Playlist = (props) => {
    const buttonClick = props.buttonClick
    const headerClassName = props.headerClassName

    return (
        <p onClick = {buttonClick}
        className = {headerClassName}
        >
            {props.playlist.name}
        </p>
    )
}

export default Playlist