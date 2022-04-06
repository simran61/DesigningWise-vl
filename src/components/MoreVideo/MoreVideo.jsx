import React from "react";
import "./moreVideo.css";

function MoreVideo(movie) {
  return (
    <div className="side-video-list-item">
      <div className="img-container-more-video">
        <img className="movie-list-item-img-sm" src={`https://i.ytimg.com/vi/${movie.movie._id}/0.jpg`} alt="" />
      </div>
      <div className="side-video-desc">
        <h4 className="side-video-title">{movie.movie.title}</h4>
        <div className="side-channel-details">
          <span>{movie.movie.creator}</span>
          <span>{movie.movie.publishDate}</span>
        </div>
      </div>
    </div>
  );
}

export { MoreVideo };
