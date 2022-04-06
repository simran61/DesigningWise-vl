import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { Nav } from "./components/Nav/Nav";
import { Home } from "./pages/Home/Home";
import { VideoListing } from "./pages/VideoListing/VideoListing";
import { SingleVideo } from "./pages/SingleVideo/SingleVideo";
import { Playlist } from "./pages/Playlist/Playlist";
import { History } from "./pages/History/History";
import { WatchLater } from "./pages/WatchLater/WatchLater";
import { SignUp } from "./pages/Auth/SignUp";
import { Login } from "./pages/Auth/Login";
import { Logout } from "./pages/Auth/Logout";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleVideo/:id" element={<SingleVideo />} />
        <Route path="/videoListing" element={<VideoListing />} />
        <Route path="/history" element={<History />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
