import React from "react";
import { MoreVideo } from "../../components/MoreVideo/MoreVideo";
import { Video } from "../../components/Video/Video";
import "./singleVideo.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"

function SingleVideo() {
  // FOR SINGLE VIDEO
  const { id } = useParams();
  const [video, setVideo] = useState({});
  useEffect(
    () => {
      (async () => {
        const data = await axios.get("/api/video/" + id);
        setVideo(data.data.video);
      })()
    }
    , []);

  // FOR MORE VIDEOS
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
    <div className="container single-page-container">
      <Video video={video} />

      <div className="more-movie-list-container">
        <h2 className="movie-list-title">More Videos</h2>
        <div className="movie-list-wrapper">
          <div className="movie-list">
            {
              !!movieList.length &&
              movieList.map((movie, id) =>
                <MoreVideo key={id} movie={movie} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export { SingleVideo };
