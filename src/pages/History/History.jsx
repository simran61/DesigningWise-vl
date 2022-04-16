import React from "react";
import "./history.css";
import { useFilter } from "../../context/filter-context";
import { MovieItem } from "../../components/MovieItem/MovieItem";

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
        <div className="show_flex">
          {historyItems.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { History };
