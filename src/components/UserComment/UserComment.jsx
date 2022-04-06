import React from "react";
import { commentProfile } from "../../assets";

import "./userComment.css";

function UserComment({ comment }) {
  return (
    <div className="video-desc margin_sm">
      <img className="channel-img" src={comment.userImg} alt="" />
      <div className="video-info">
        <h3 className="movie-list-item-title">{comment.name}</h3>
        <div className="channel-details">
          <span>{comment.text}</span>
        </div>
      </div>
    </div>
  );
}

export { UserComment };
