import { useState } from "react";
import { profile, videoProfile } from "../../assets";
import { UserComment } from "../UserComment/UserComment";
import { Modal } from '../Modal/Modal'
import "./video.css";
import { useFilter } from "../../context/filter-context";

function Video({ video }) {
  const { productDispatch } = useFilter();
  var comments = video.comments
  const [modal, setModal] = useState(false)

  const [like, setlike] = useState(128);
  const [dislike, setdislike] = useState(6);

  const [likeactive, setlikeactive] = useState(false);
  const [dislikeactive, setdislikeactive] = useState(false);

  function likef() {
    if (likeactive) {
      setlikeactive(false);
      setlike(like - 1);
    } else {
      setlikeactive(true);
      setlike(like + 1);
      if (dislikeactive) {
        setdislikeactive(false);
        setlike(like + 1);
        setdislike(dislike - 1);
      }
    }
  }

  function dislikef() {
    if (dislikeactive) {
      setdislikeactive(false);
      setdislike(dislike - 1);
    } else {
      setdislikeactive(true);
      setdislike(dislike + 1);
      if (likeactive) {
        setlikeactive(false);
        setdislike(dislike + 1);
        setlike(like - 1);
      }
    }
  }

  return (
    <div className="single-video-container">
      <div className="show-video">
        <div className="full-video-container">
          <iframe className="banner-img-video"
            src={`https://www.youtube.com/embed/${video._id}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />

        </div>
        <div className="video-info">
          <div className="border-left fs-sm">{video.category}</div>
          <h2 className="video-title">{video.title}</h2>
          <div className="video-info fs-sm">{video.views} | {video.publishDate}</div>
          <div className="video-btns">

            <button onClick={likef}
              className={[likeactive ? "active-like" : null, "count_btn"].join(" ")}>
              <img
                className="video-icon-btn"
                src="https://img.icons8.com/windows/32/ffffff/like--v1.png"
              />
              {like} Likes
            </button>

            <button onClick={dislikef}
              className={[dislikeactive ? "active-dislike" : null, "count_btn"].join(
                " "
              )}>
              <img
                className="video-icon-btn"
                src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/ffffff/external-dislike-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
              />
              {dislike} Dislikes
            </button>

            <button
              onClick={() => {
                setModal(true)
                setModal(pre => {
                  return pre
                })
              }
              }
              className="btn btn-active btn-video">
              <img
                className="video-icon-btn"
                src="https://img.icons8.com/ios/50/ffffff/playlist.png"
              />
              Playlist
            </button>
            {
              modal ? <Modal setModal={setModal} _id={video._id} /> : null
            }

            <button className="btn btn-active btn-video">
              <img
                className="video-icon-btn"
                src="https://img.icons8.com/ios-glyphs/60/ffffff/share--v1.png"
              />
              Share
            </button>
          </div>
          <hr noshade />
          <div className="video-desc">
            <img className="channel-img" src={video.createrProfile} alt="" />
            <div className="video-info">
              <h3 className="movie-list-item-title">{video.creator}</h3>
              <div className="channel-details">
                <span>{video.subscribers}</span>
              </div>
            </div>
            <button className="btn btn-active btn-video">
              <img
                className="video-icon-btn"
                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-bell-basic-ui-elements-flatart-icons-outline-flatarticons.png"
              />
              SUBSCRIBE
            </button>
          </div>
          <p className="description-box">{video.description}</p>
          <hr noshade />

          <h2 className="border-left comments-heading">Comments &nbsp; (2)</h2>
          <div className="video-desc margin_sm">
            <img className="channel-img" src={profile} alt="" />
            <div className="add-comment">
              <p>Add a public comment...</p>
            </div>
          </div>
          {
            comments && comments.map((comment, id) =>
              <UserComment key={id} comment={comment} />
            )
          }
          <hr noshade />
        </div>
      </div>
    </div >
  );
}

export { Video };
