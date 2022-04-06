import React from "react";
import "./bannerContent.css";

function BannerContent() {
  return (
    <div className="img-wrapper">
      <img
        src="https://images.pexels.com/photos/3547625/pexels-photo-3547625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="banner-img"
      />

      <div className="banner-content">
        <h1 className="banner-heading">Learn and Excel</h1>
        <p className="banner-para">
          If you love painting and thinking where to start, you are at the right
          place. Start your learning journey with us. Learn all types of
          designing related skills from DesigningWise!
        </p>
        <button className="btn banner-btn">Explore Now</button>
      </div>
    </div>
  );
}

export { BannerContent };
