import React from "react";
import HolidayLine from "./HolidayLine";
import TimesDay from "./TimesDay";
import TimeLines from "./TimeLines";
import BlockDay from "./BlockDay";
import "./mainSection.scss";


const MainSection = ({ showPopup, setDateBlock,events,showEventData,dateEvent,blink
}) => {
  return (
    <section className="main">
      <HolidayLine /> 
    
      <div className="wrapper-time">
        <div className="time">
          <TimesDay />
          <TimeLines />
        </div>
        <BlockDay
          dayId={setDateBlock}
          showPopup={showPopup}
          events={events}
          dateEvent={dateEvent}
          showEventData={showEventData}
          blink={blink}
        />
      </div>
    </section>
  );
};

export default MainSection;
