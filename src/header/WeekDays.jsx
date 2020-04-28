import React from "react";

import moment from "moment";

//function to generate numbers 
const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
      result.push(i);
  };
  return result;
}

const WeekDays = ({ addDay }) => {

  let currentDay = addDay;

  const weekDays = generateNumbersRange(0, 6).map(ele => {
    const startOfWeek = moment()
      .startOf("week")
      .add(currentDay, "day");
     // current day and Name
    let markCurrentDay;
    let markCurrentDayName;

    if (moment().format("DD.MM.YY") === startOfWeek.format("DD.MM.YY")) {
      //class fo current day and date change styles
      markCurrentDay = "day-date day-date__current";
      markCurrentDayName = "day-name day-name__current";
    } else {
      markCurrentDay = "day-date";
      markCurrentDayName = "day-name ";
    }

    currentDay++;

    return (
      <li key={ele} className="week__day">
        <span className={markCurrentDayName}>{startOfWeek.format("ddd")}</span>
        <span className={markCurrentDay}>{startOfWeek.format("DD")}</span>
      </li>
    );
  });

  return <ul className="week">{weekDays}</ul>;
};
  

export default WeekDays;
