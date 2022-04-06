import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../../assets";
import "./nav.css";

function Nav() {
  return (
    <div>
      <div className="navbar">
        <div className="logo-container">
          <div>
            Designing<span className="theme-color">Wise</span>
          </div>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li className="menu-list-item">
              <Link to="/" className="active">Home</Link>
            </li>
            <li className="menu-list-item">
              <Link to="/videoListing">Explore</Link>
            </li>
            <li className="menu-list-item">
              <Link to="/playlist">Playlist</Link>
            </li>
            <li className="menu-list-item">
              <Link to="/watchLater">Watch Later</Link>
            </li>
            <li className="menu-list-item">
              <Link to="/history">History</Link>
            </li>
          </ul>
        </div>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="I want to learn..."
          />
          <i className="theme-color fas fa-search"></i>
        </div>
        <div className="profile-container">
          <Link to="/logout">
            <div className="profile-text-container">
              <img className="profile-picture" src={'https://cdn.hashnode.com/res/hashnode/image/upload/v1628782770585/WNZOFXg9t.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress'} alt="" />
              <span className="profile-text">Simran</span>
            </div>
          </Link>
          <div className="toggle">
            <i className="fas fa-moon toggle-icon"></i>
            <i className="fas fa-sun toggle-icon"></i>
            <div className="toggle-ball"></div>
          </div>
        </div>
      </div>

      <div className="sidebar">
        <a href="#">
          <img
            className="left-menu-icon"
            src="https://img.icons8.com/windows/64/ffffff/home-page.png"
          />
        </a>

        <a href="./videoListing/videoListing.html">
          <img
            className="left-menu-icon"
            src="https://img.icons8.com/material-outlined/48/ffffff/circled-play.png"
          />
        </a>

        <a href="./playlist/playlist.html">
          <img
            className="left-menu-icon"
            src="https://img.icons8.com/ios/50/ffffff/playlist.png"
          />
        </a>

        <a href="./watchLater/watchLater.html">
          <img
            className="left-menu-icon"
            src="https://img.icons8.com/material-outlined/48/ffffff/clock--v1.png"
          />
        </a>

        <a href="./history/history.html">
          <img
            className="left-menu-icon"
            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/ffffff/external-history-essentials-tanah-basah-basic-outline-tanah-basah.png"
          />
        </a>
      </div>
    </div>
  );
}

export { Nav };
