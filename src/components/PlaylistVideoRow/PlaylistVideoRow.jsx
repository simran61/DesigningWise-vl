import React from "react";
import { useEffect, useState } from "react";
import { MovieItem } from "../MovieItem/MovieItem";
import "./playlistVideoRow.css";
import axios from 'axios'

function PlaylistVideoRow() {

  const [movieList, setMovieList] = useState([]);
  useEffect(
    () => {
      (async () => {
        const data = await axios.get("/api/videos");
        setMovieList(data.data.videos);
      })()
    }
    , []);

  return (
    <div className="movie-list-container">
      <div className="page-heading">
        <h2 className="movie-list-title">Sketching Practice</h2>
        <div className="sub-heading-icons">
          <img
            className="sub-heading-icon"
            src="https://img.icons8.com/windows/64/ffffff/edit--v1.png"
          />
          <img
            className="sub-heading-icon"
            src="https://img.icons8.com/material-outlined/24/ffffff/trash--v1.png"
          />
        </div>
      </div>
      <div className="movie-list-wrapper">
        <div className="movie-list">
          {
            !!movieList.length &&
            movieList.map((movie, id) =>
              <MovieItem key={id} movie={movie} />
            )
          }
          {/* <MovieItem /> */}
        </div>
      </div>
    </div>
  );
}

export { PlaylistVideoRow };
