import React from "react";
import { useState, useEffect } from "react";
import { MovieItem } from "../MovieItem/MovieItem";
import "./movieListRow.css";
import axios from "axios";


function MovieListRow() {
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
      <h2 className="movie-list-title">Trending Tutorials</h2>
      <div className="movie-list-wrapper">
        <div className="movie-list">
          {
            !!movieList.length &&
            movieList.map((movie, id) =>
              <MovieItem key={id} movie={movie} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export { MovieListRow };
