import React from 'react';

const getPercent = decimal => {
  return decimal * 100 + '%'
}

const calGoalPrgress = (total, goal) => {
  return getPercent(total/goal)
}


const FunctionalSkiDayCounter = (props) => {
  const {total, powder, backcountry, goal} = props;
  return(
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
          <p>Goal Progress: {calGoalPrgress(total,goal)}</p>
        </div>
      </section>
  )
}

export default FunctionalSkiDayCounter;