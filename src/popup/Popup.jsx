import React from "react";
import Form from "./Form";
import "./popup.scss";

const Popup = ({ dateEvent,timeEvent,endDateEvent,endTimeEvent,
handleSubmit, deleteEvent, hidePopup, nameEvent, descriptionEvent,
 isEvent}) => {
  return (
    <div className="popup">
      <button className="close material-icons" onClick={hidePopup}>
        close
      </button>
      <Form
        dateEvent={dateEvent}
        timeEvent={timeEvent}
        endTimeEvent={endTimeEvent}
        endDateEvent={endDateEvent}
        handleSubmit={handleSubmit}
        deleteEvent={deleteEvent}
        isEvent={isEvent}
        nameEvent={nameEvent}
        descriptionEvent={descriptionEvent}
      />
      <button
        className={`delete-ivent   ${!isEvent && "delete-ivent__off"}`}
        onClick={deleteEvent}
      >
        <i className="Tiny material-icons ">delete</i>
      </button>
    </div>
  );
};

export default Popup;
