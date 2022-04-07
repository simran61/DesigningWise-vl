import React from "react";
import { PlaylistVideoRow } from "../../components/PlaylistVideoRow/PlaylistVideoRow";
import "./history.css";
import { useFilter } from "../../context/filter-context";
import { MovieItem } from "../../components/MovieItem/MovieItem";
// import {useFilter} 


function History() {
  const { productState } = useFilter();
  const historyItems = productState.product.filter(
    (item) => item.isHistory
  );
  return (
    <div className="container">
      <div className="content-container">
        <h1 className="theme-color">
          <img
            className="heading-icon"
            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/ffffff/external-history-essentials-tanah-basah-basic-outline-tanah-basah.png"
          />
          My History ({historyItems.length})
        </h1>
        {/* <EmptyPlaylist /> */}
        {/* <PlaylistVideoRow /> */}
        {historyItems.map((movie) => (
          <MovieItem movie={movie} />
        ))}
      </div>
    </div>
  );
}

export { History };
