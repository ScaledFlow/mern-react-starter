import React from 'react';
import './/GoalList.css';

const GoalList = props => {
  // console.log(props.goals[0].text);
    //  console.log(props);
    console.log("GoalList");
  return <ul className="goal-list"> {
      props.goals.map((x) => {
        // console.log(x);
      return <li key={x.id}>{x.text}</li>
      })
    }</ul>;
}


export default GoalList;
