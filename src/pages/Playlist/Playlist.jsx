import React from "react";
import { EmptyPlaylist } from "../../components/EmptyPlaylist/EmptyPlaylist";
import { PlaylistVideoRow } from "../../components/PlaylistVideoRow/PlaylistVideoRow";
import "./playlist.css";

function Playlist() {
  return (
    <div className="container">
      <div className="content-container">
        <h1 className="theme-color">
          <img
            className="heading-icon"
            src="https://img.icons8.com/ios/50/ffffff/playlist.png"
          />
          My Playlist
        </h1>
        {/* <EmptyPlaylist /> */}
        <PlaylistVideoRow />
        <PlaylistVideoRow />
      </div>
    </div>
  );
}

export { Playlist };
