import React from "react";
import { painting4, videoProfile } from "../../assets";
import "./movieItem.css";
import { Link } from "react-router-dom"

function MovieItem({ movie }) {
  // console.log(movie)
  return (
    <div className="movie-list-item">
      <Link to={"/singleVideo/" + movie._id}>
        <div className="img-container">
          <img className="movie-list-item-img" src={`https://i.ytimg.com/vi/${movie._id}/0.jpg`} alt="" />
          <div className="play-img">
            <img src="https://img.icons8.com/fluency-systems-filled/48/ffffff/play.png" />
          </div>
          <div className="playlist-img">
            <img src="https://img.icons8.com/ios-glyphs/30/d7d7d9/add--v1.png" />
          </div>
        </div>
      </Link>
      <div className="video-desc">
        <img className="channel-img" src={movie.createrProfile} alt="" />
        <div className="video-info">
          <h3 className="movie-list-item-title">{movie.title}</h3>
          <div className="channel-details">
            <span>{movie.creator}</span>
            <span>{movie.publishDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MovieItem };
