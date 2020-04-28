import React from "react";
import { generateNumbersRange } from "../utilities";

const TimeLines = () => {
  const lines = generateNumbersRange(0, 23).map(arg => (
    <div key={arg} className="time__line"></div>
  ));
  return <div className="time__lines">{lines}</div>;
};

export default TimeLines;
