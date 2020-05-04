import React from "react";
import moment from "moment";



const AddButton = ({ showPopup }) => {
  const todayDate = moment();
  const today = todayDate.format("YYYY-MM-DD");
  console.log(today);
  return (
    <button
      className="add-button add-event"
      onClick={() => showPopup(today, "09:00", "23:00")}
    >
      <img
        src="https://img.icons8.com/dusk/64/000000/calendar-plus.png"
        alt="add icon"
      />

      <span className="add-button__text add-event">Create</span>
    </button>
  );
};

export default AddButton;