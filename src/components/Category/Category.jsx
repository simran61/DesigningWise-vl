import React from "react";
import "./category.css";

function Category() {
  return (
    <div className="categories">
      <div className="select-options">
        <div className="option-one">
          <p className="select-heading select-one">
            All generes
            <img
              className="dropdown"
              src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-down-arrows-those-icons-fill-those-icons-7.png"
            />
          </p>
        </div>

        <div className="option-two">
          <p className="select-heading">
            All the years
            <img
              className="dropdown"
              src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-down-arrows-those-icons-fill-those-icons-7.png"
            />
          </p>
        </div>
      </div>
      <div className="select-btns">
        <button className="btn">Featured</button>
        <button className="btn">Popular</button>
        <button className="btn btn-active">Trending</button>
      </div>
    </div>
  );
}

export { Category };
