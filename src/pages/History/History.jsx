import React from "react";
import { PlaylistVideoRow } from "../../components/PlaylistVideoRow/PlaylistVideoRow";
import "./history.css";

function History() {
  return (
    <div className="container">
      <div className="content-container">
        <h1 className="theme-color">
          <img
            className="heading-icon"
            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/ffffff/external-history-essentials-tanah-basah-basic-outline-tanah-basah.png"
          />
          My History
        </h1>
        {/* <EmptyPlaylist /> */}
        <PlaylistVideoRow />
      </div>
    </div>
  );
}

export { History };
