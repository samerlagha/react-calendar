import React from "react";
import { generateNumbersRange } from "../utilities/utilities";
import moment from "moment";

const WeekDays = ({ addDay }) => {
  let currentDay = addDay;

  const weekDays = generateNumbersRange(0, 6).map(li => {
    const startOfWeek = moment()
      .startOf("isoWeek")
      .add(currentDay, "day");

    let markCurrentDay;
    let markCurrentDayName;

    if (moment().format("DD.MM.YY") === startOfWeek.format("DD.MM.YY")) {
      markCurrentDay = "day-date day-date__current";
      markCurrentDayName = "day-name day-name__current";
    } else {
      markCurrentDay = "day-date";
      markCurrentDayName = "day-name ";
    }

    currentDay++;

    return (
      <li key={li} className="week__day">
        <span className={markCurrentDayName}>{startOfWeek.format("ddd")}</span>
        <span className={markCurrentDay}>{startOfWeek.format("DD")}</span>
      </li>
    );
  });

  return <ul className="week">{weekDays}</ul>;
};

export default WeekDays;
