import React, { Component } from "react";

class SkiDayCounter extends Component {

  getPercent = decimal => {
    return decimal * 100 + '%'
  }

  calGoalPrgress = (total, goal) => {
    return this.getPercent(total/goal)
  }

  render() {
    const {total, powder, backcountry, goal} = this.props; // using object destructuring
    return (
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calGoalPrgress(total, goal)}</p>
        </div>
      </section>
    )
  }
}

export default SkiDayCounter;
