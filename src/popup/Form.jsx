import React from "react";
import { getOptionsBegin } from "./getOptionBegin.js";
import { getOptionsEnd } from "./getOptionEnd.js";

class Form extends React.Component {
  state = {
    nameEvent: "",
    endDateEvent: "",
    endTimeEvent: "",
    timeEvent: "",
    dateEvent: "",
    descriptionEvent: ""
  };

  componentDidMount() {
    this.setState({
      dateEvent: this.props.dateEvent,
      timeEvent: this.props.timeEvent,
      endTimeEvent: this.props.endTimeEvent,
      endDateEvent: this.props.endDateEvent,
      nameEvent: this.props.nameEvent,
      descriptionEvent: this.props.descriptionEvent
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dateEvent !== prevProps.dateEvent ||
      this.props.timeEvent !== prevProps.timeEvent ||
      this.props.endTimeEvent !== prevProps.endTimeEvent ||
      this.props.endDateEvent !== prevProps.endDateEvent ||
      this.props.nameEvent !== prevProps.nameEvent ||
      this.props.descriptionEvent !== prevProps.descriptionEvent
    ) {
      const {
        dateEvent,
        timeEvent,
        endTimeEvent,
        endDateEvent,
        nameEvent,
        descriptionEvent
      } = this.props;
      this.setState({
        dateEvent,
        timeEvent,
        endTimeEvent,
        endDateEvent,
        nameEvent,
        descriptionEvent
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      nameEvent,
      endDateEvent,
      endTimeEvent,
      timeEvent,
      dateEvent,
      descriptionEvent
    } = this.state;

    const eventData = {
      nameEvent,
      endDateEvent,
      endTimeEvent,
      timeEvent,
      dateEvent,
      descriptionEvent,
      startEvent: `${this.state.dateEvent}-${this.state.timeEvent}`,
      endEvent: `${this.state.endDateEvent}-${this.state.endTimeEvent}`
    };
    this.props.handleSubmit(eventData);
  };

  handleChangeFormData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clearForm = () => {
    this.setState({
      popupOpen: false,
      startEvent: "",
      nameEvent: "",
      descriptionEvent: "",
      endDateEvent: "",
      endTimeEvent: "",
      dateEvent: "",
      timeEvent: ""
    });
  };

  render() {
    const { nameEvent, descriptionEvent, endDateEvent,
      endTimeEvent, timeEvent, dateEvent } = this.state;
    const optionBegin = getOptionsBegin();
    const optionEnd = getOptionsEnd();
    return (
      <>
        <form className="popup__form" onSubmit={this.handleSubmit}>
          <input
            name="nameEvent"
            type="text"
            className="name-event"
            placeholder="Event name"
            value={nameEvent}
            onChange={this.handleChangeFormData}
          />
          <div className="date-wrapper">
            <i className="Tiny material-icons">access_time</i>
            <input
              name="dateEvent"
              type="date"
              className="date-event begin"
              value={dateEvent}
              onChange={this.handleChangeFormData}
            />
            <select
              name="timeEvent"
              className="bgn-time select-time"
              value={timeEvent}
              onChange={this.handleChangeFormData}
            >
              {optionBegin}
            </select>
            <span>--</span>
            <select
              name="endTimeEvent"
              className="bgn-end select-time"
              value={endTimeEvent}
              onChange={this.handleChangeFormData}
            >
              {optionEnd}
            </select>
            <input
              name="endDateEvent"
              type="date"
              className="date-event end"
              value={endDateEvent}
              onChange={this.handleChangeFormData}
            />
          </div>
          <div className="description ">
            <i className="Tiny material-icons ">format_align_left</i>
            <textarea
              className="description-input "
              name="descriptionEvent"
              cols="40"
              rows="4"
              placeholder="Add description "
              value={descriptionEvent}
              onChange={this.handleChangeFormData}
            ></textarea>
          </div>
          <div className="control ">
            <button type="submit" className="submit-button ">
              Add Task
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
