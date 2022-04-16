import React from 'react';

const PlaylistItem = (props) => {

    return <div className="playlistInfo">
        <div>
            <input type="checkbox" id="playlistName" name="playlistName" value="Digital Art" />
            <label for="playlistName"> {props.text}</label>
        </div>
        <span onClick={() => {
            props.onSelect(props.id)
        }} className="playlist_checkbox_delete">&times;</span>
    </div>;
}

export default PlaylistItem;