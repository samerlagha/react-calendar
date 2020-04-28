import React from "react";

const TodayButton = ({onClick}) => {
  return (
    <button className="show-today-btn" onClick={onClick} >
      <span className="today-text">Today</span>
    </button>
  );
};

export default TodayButton;
