import React from "react";
import "./movieItem.css";
import { Link } from "react-router-dom"
import { useFilter } from "../../context/filter-context";

function MovieItem({ movie }) {
  const { productDispatch } = useFilter();
  console.log(movie)
  const { _id, isWatchLater } = movie;
  return (

    <div onClick={() =>
      productDispatch({
        type: "ADD_TO_HISTORY",
        payload: { itemId: _id },
      })
    } className="movie-list-item">
      <div className="img-container">
        <img className="movie-list-item-img" src={`https://i.ytimg.com/vi/${movie._id}/0.jpg`} alt="" />
        <div className="play-img">
          <img src="https://img.icons8.com/fluency-systems-filled/48/ffffff/play.png" />
        </div>

        <i
          onClick={() =>
            productDispatch({
              type: "ADD_TO_WATCHLATER",
              payload: { itemId: _id },
            })
          }
          className={`playlist-img fa-solid ${isWatchLater ? "fa-circle-minus" : "fa-circle-plus"
            }`}></i>

      </div>
      <Link to={"/singleVideo/" + movie._id}>
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
      </Link>
    </div >
  );
}

export { MovieItem };
