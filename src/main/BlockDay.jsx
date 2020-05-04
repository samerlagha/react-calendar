import React from "react";
import { generateNumbersRange } from "../utilities";
import BlockHours from "./BlockHours";
import Redline from "./RedLine";
import moment from "moment";

// block days or body our calender it's like a tabel were we can add our event evrey column it is a on day 24 hours and evrey row it is a one hour

const BlockDays = ({ dayId, showPopup, events, showEventData, dateEvent, blink }) => {
  
  let idForHour = dayId;
  const blockDay = generateNumbersRange(0, 6).map(arg => {
    let idHour = moment()
      .startOf("week")
      .add(idForHour, "day")
      .format("YYYY-MM-DD");
    idForHour++;

    const redline =
      idHour === moment().format("YYYY-MM-DD") ? <Redline /> : null;

    return (
      <div key={arg} className="block-day">
        
        {redline}
        <BlockHours
          hourId={idHour}
          events={events}
          showPopup={showPopup}
          dateEvent={dateEvent}
          showEventData={showEventData}
          blink={blink}
        />
      </div>
    );
  });

  return blockDay;
};

export default BlockDays;
