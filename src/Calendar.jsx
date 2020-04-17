import React from "react";
import Header from "./header/Header";

export default class Calendar extends React.Component {
   state={
     startWeekMonday:0,
   }
   handleNextWeek = () => {
    this.setState({
      diffWithMondayOfThis: this.state.diffWithMondayOfThis + 7
    });
  };

  handlePrevWeek = () => {
    this.setState({
      diffWithMondayOfThis: this.state.diffWithMondayOfThis - 7
    });
  };

  handleCurrentWeek = () => {
    this.setState({
      diffWithMondayOfThis: 0
    });
  };

  render() {
    return (
      <div className="calendar">
        <Header
            nextWeek={this.handleNextWeek}
            prevWeek={this.handlePrevWeek}
            currentWeek={this.handleCurrentWeek}
            addDay={this.state.diffWithMondayOfThis}
           
        />
        
        )}
      </div>
    );
  }
}

