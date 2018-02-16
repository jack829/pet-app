import React from 'react';
import classes from './Pet.css';

const pet = (props) => {
  const { name, age, id } = props.info;
  return (
    <div className={classes.Pet}>
      <p>I'm little {name} and I'm {age}</p>
      <input onChange={props.onNameChange} value={name} data-id={`${id}`} />
      <button className={classes.delete}>Delete Me</button>
    </div>
  )
}

export default pet;
