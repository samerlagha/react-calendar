import React from "react";

const NavigationButtons = ({ onClick, onClickPrev }) => {
  return (
    <div className="nav-button">
      <button className="nav-button__prev button-style" onClick={onClickPrev}>
        <i className="material-icons nav-button__size">keyboard_arrow_left</i>
      </button>
      <button className="nav-button__next button-style" onClick={onClick}>
        <i className="material-icons nav-button__size ">chevron_right</i>
      </button>
    </div>
  );
};

export default NavigationButtons;
