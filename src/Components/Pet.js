import React from 'react';
import './Pet.css';

const pet = (props) => {
  const { name, age, id } = props.info;
  return (
    <div className="Pet">
      <p>I'm little {name} and I'm {age}</p>
      <input onChange={props.onNameChange} value={name} data-id={`${id}`}/>
    </div>
  )
}

export default pet;
