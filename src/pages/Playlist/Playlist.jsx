import React from "react";
import { EmptyPlaylist } from "../../components/EmptyPlaylist/EmptyPlaylist";
import "./playlist.css";
import { MovieItem } from "../../components/MovieItem/MovieItem"
import { useFilter } from '../../context/filter-context';

function Playlist() {
  const { productState } = useFilter();
  const playlistItems = [...productState.product.filter(
    (item) => item.isPlaylist
  )];
  console.log(playlistItems)
  return (
    <div className="container">
      <div className="content-container">
        <h1 className="theme-color">
          <img
            className="heading-icon"
            src="https://img.icons8.com/ios/50/ffffff/playlist.png"
          />
          My Playlist ({playlistItems.length})
        </h1>
        {/* <EmptyPlaylist /> */}
        {/* <h2 className="movie-list-title mr_top">{playlistItems.length === 0 ? 'Empty Playlist! Please add something.' : playlistItems[0].playlistName}</h2> */}


        {
          playlistItems.map((item) => {
            return (
              <>
                <h2 className="movie-list-title mr_top">{playlistItems.length === 0 ? 'Empty Playlist! Please add something.' : item.playlistName}</h2>
                <div className="show_flex">

                  <MovieItem movie={item} />

                </div>
              </>
            )
          })
        }

        {/* <div className="show_flex">
          {playlistItems.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export { Playlist };
