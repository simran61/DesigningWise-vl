import { useState } from "react";
import { profile, videoProfile } from "../../assets";
import { UserComment } from "../UserComment/UserComment";
import { Modal } from '../Modal/Modal'
import "./video.css";
import { useFilter } from "../../context/filter-context";

function Video({ video }) {
  const { productDispatch } = useFilter();
  const { isLiked } = video;
  var comments = video.comments
  const [modal, setModal] = useState(false)
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
            <button className="btn btn-active btn-video">
              <img
                className="video-icon-btn"
                src="https://img.icons8.com/windows/32/ffffff/like--v1.png"
              />
              Like
            </button>


            <button className="btn btn-active btn-video">
              <img
                className="video-icon-btn"
                src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/ffffff/external-dislike-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
              />
              Dislike
            </button>

            <button
              onClick={() => {
                setModal(true)
                console.log('click')
                setModal(pre => {
                  console.log(pre);
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
