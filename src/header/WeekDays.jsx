import React from "react";
import { generateNumbersRange } from "../utilities";
import moment from "moment";

// function to generate numbers 
// const generateNumbersRange = (from, to) => {
//   const result = [];

//   for (let i = from; i <= to; i++) {
//       result.push(i);
//   };
//   return result;
// }

const WeekDays = ({ addDay }) => {
  //today data
  let currentDay = addDay;
 // func weekdays return current date & name
  const weekDays = generateNumbersRange(0, 6).map((li) => {

    //first day in week 'monday'
    const startOfWeek = moment().startOf("week").add(currentDay, "day");

    //mark today data and name of day
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
