import React, { useState}  from 'react';
import './NewGoal.css';

const NewGoal = props => {
  const [enteredText, setEnteredText] = useState('');
  console.log('New Goal Props ');
  console.log(props);
  console.log(props.onAddGoal);

  const addGoalHandler = event => {
   

    event.preventDefault();
    console.log('NewGoal 1');

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText('');

    console.log(newGoal);

    console.log('newGoal Value');
    console.log(newGoal);
    props.onAddGoal(newGoal);
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  }

  return <form className='new-goal' onSubmit={addGoalHandler}>
    <input type='text' value={enteredText} onChange={textChangeHandler}/>
    <button type="submit">Add Goal</button>
  </form>

}

export default NewGoal;