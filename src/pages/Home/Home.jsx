import React from "react";
import { BannerContent } from "../../components/BannerContent/BannerContent";
import { Category } from "../../components/Category/Category";
import { MovieListRow } from "../../components/MovieListRow/MovieListRow";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <div className="content-container">
        <BannerContent />
        <Category />
        <MovieListRow />
      </div>
    </div>
  );
}

export { Home };
