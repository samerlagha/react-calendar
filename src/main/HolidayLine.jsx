import React from "react";
import { generateNumbersRange } from "../utilities";
import GMT from "./Gmt";

const HolidayLine = () => {
  const holiday = generateNumbersRange(0, 6).map(arg => (
     <div key={arg} className="holiday__day"></div>
  ));
  return (
    <div className="holiday-wrapper">
      <GMT gmt='+2GMT'/>
      <div className="holiday">
      {holiday}
      </div>
    </div>
  );
};

export default HolidayLine;
