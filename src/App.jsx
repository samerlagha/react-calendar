import React , { Component }from  "react";
import Header from "./header/Header";
import MainSection from "./main/MainSection";
import Popup from "./popup/Popup";
import { validationIntersect } from "./validation/validationIntersect";
import { validation } from "./validation/validation";
import { validateDelete } from "./validation/validateDelete";
import { createEvent,fetchEvents,deleteEvents} from "./eventsGateway";


export default class Calendar extends Component {

   // start state
  state={
     diffWithMonday:0,
     deleteEventData: "",
    isEvent: false,
    blink: "",
    events: [],
    popupData: false
   }
  
   //change state next week
   handleNextWeek = () => {
    this.setState({
      diffWithMonday: this.state.diffWithMonday + 7
    });
  };
 
  //change state prev week
  handlePrevWeek = () => {
    this.setState({
      diffWithMonday: this.state.diffWithMonday - 7
    });
  };

 // handle current week
  handleCurrentWeek = () => {
    this.setState({
      diffWithMonday: 0
    });
  };


  handleHidePopup = () => {
    this.setState({
      blink: "",
      popupData: false
    });
  };

  handleShowPopup = (dateStart, timeEvent, endTimeEvent) => {
    this.setState({
      popupData: {
        dateEvent: dateStart,
        endDateEvent: dateStart,
        timeEvent,
        endTimeEvent,
        descriptionEvent: "",
        nameEvent: ""
      },
      isEvent: false,
      blink: ""
    });
  };


  showEventData = (e,{
    date,
    nameEvent,
    descriptionEvent,
    endDateEvent,
    endTimeEvent,
    dateEvent,
    timeEvent,
    id }) => {
  e.stopPropagation();
  this.setState({
    popupOpen: true,
    isEvent: true,
    deleteEvent: date,
    popupData: {
      nameEvent,
      descriptionEvent,
      endDateEvent,
      endTimeEvent,
      dateEvent,
      timeEvent,
      id
    },
    deleteEventData: `${dateEvent}-${timeEvent}`,
    isEvent: true,
    blink: "",
    id
  });
};

deleteEvent = () => {
  if (!validateDelete(this.state.deleteEventData)) {
    this.setState({
      deleteEventData: false
    });
    return;
  }
  deleteEvents(this.state.id).then(() => {
    fetchEvents().then(events => {
      this.setState({
        events: events,
        blink: "",
        popupData: "",
        id: null
      });
    });
  });
};

componentDidMount() {
  fetchEvents().then(events => {
    this.setState({
      events: events,
      blink: "",
      id: null
    });
  });
}

handleSubmit = event => {
  if (!validation(event, this.state.events, this.state.deleteEventData))
    return;
  let intersect = validationIntersect(
    event,
    this.state.events,
    this.state.deleteEventData
  );
  if (intersect) {
    this.setState({
      blink: intersect.startEvent
    });
    return;
  }
  if (this.state.id) {
    this.deleteEvent();
  }
  createEvent(event).then(() => {
    fetchEvents().then(events => {
      this.setState({
        events: events,
        blink: "",
        popupData: ""
      });
    });
  });
};

  render() {
    return (
      <div className="calendar">
        <Header
          nextWeek={this.handleNextWeek}
          prevWeek={this.handlePrevWeek}
          currentWeek={this.handleCurrentWeek}
          addDay={this.state.diffWithMonday}
          showPopup={this.handleShowPopup}
        />
        <MainSection
          setDateBlock={this.state.diffWithMonday}
          showPopup={this.handleShowPopup}
          events={this.state.events}
          showEventData={this.showEventData}
          blink={this.state.blink}
        />
        {this.state.popupData && (
          <Popup
            {...this.state.popupData}
            hidePopup={this.handleHidePopup}
            handleSubmit={this.handleSubmit}
            deleteEvent={this.deleteEvent}
            isEvent={this.state.isEvent}
          />
        )}
      </div>
    );
  }
}



