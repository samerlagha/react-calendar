import React from "react";
import BigLine from "./BigLine";
import TimesDay from "./TimesDay";
import TimeLines from "./TimeLines";
import BlockDay from "./BlockDay";
import "./mainSection.scss";


const MainSection = ({ showPopup, setDateBlock,events,showEventData,dateEvent,blink
}) => {
  return (
    <section className="main">
      <BigLine /> 
    
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
