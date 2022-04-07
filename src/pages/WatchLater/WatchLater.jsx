import React from "react";
import { MovieItem } from "../../components/MovieItem/MovieItem";
import { PlaylistVideoRow } from "../../components/PlaylistVideoRow/PlaylistVideoRow";
import { useFilter } from "../../context/filter-context";
import "./watchLater.css";

function WatchLater() {
  const { productState } = useFilter();
  console.log(productState)
  const watchlaterItems = productState.product.filter(
    (item) => item.isWatchLater
  );
  console.log(watchlaterItems)
  return (
    <div className="container">
      <div className="content-container">
        <h1 className="theme-color">
          <svg
            className="heading-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
            ></path>
            <path
              fill="currentColor"
              d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
            ></path>
          </svg>
          Watch Later({watchlaterItems.length})
        </h1>
        {/* <EmptyPlaylist /> */}
        {/* <PlaylistVideoRow /> */}
        {watchlaterItems.map((movie) => (
          <MovieItem movie={movie} />
        ))}
      </div>
    </div>
  );
}

export { WatchLater };
