import React from "react";
import AddButton from './AddButton';
import TodayButton from "./TodayButton";
import NavigationButtons from "./NavigationButtons";
import WeekDays from "./WeekDays";
import { getCurrentDate } from "./showData";
import PropTypes from "prop-types";
import "./header.scss";

const Header = ({ showPopup, nextWeek, prevWeek, currentWeek, addDay }) => {
  const currentData = getCurrentDate(addDay);

  return (
    <div className="header">
      <div className="navigation">
        <AddButton showPopup={showPopup} />
        <TodayButton onClick={currentWeek} />
        <NavigationButtons onClick={nextWeek} onClickPrev={prevWeek} />
        <div className="current-month">{currentData}</div>
      </div>
      <WeekDays addDay={addDay} />
    </div>
  );
};

export default Header;

Header.propTypes = {
  showPopup: PropTypes.func,
  nextWeek: PropTypes.func,
  prevWeek: PropTypes.func,
  currentWeek: PropTypes.func,
};