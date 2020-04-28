import React from "react";
import moment from "moment";

const AddButton = ({ showPopup }) => {
  const todayDate = moment().format("YYYY-MM-DD");
  return (
    <button
      className="add-button add-event"
       onClick={()=>showPopup(todayDate)} >
     
      <img src="https://img.icons8.com/dusk/64/000000/calendar-plus.png" alt='add icon'/>
      
      
         <span className="add-button__text add-event">Create</span>
    </button>
  );
};

export default AddButton;
