import React from "react";
import { Category } from "../../components/Category/Category";
import { MovieListRow } from "../../components/MovieListRow/MovieListRow";

function VideoListing() {
  return (
    <div className="container">
      <div className="content-container">
        <Category />
        <MovieListRow />
        <MovieListRow />
        <MovieListRow />
        <MovieListRow />
      </div>
    </div>
  );
}

export { VideoListing };
