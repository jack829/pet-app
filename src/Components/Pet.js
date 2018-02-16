import React from 'react';
import './Pet.css';

const pet = (props) => {
  const { name, age, id } = props.info;
  const deleteStyle = {
    backgroundColor: 'red',
    border: '1px solid #ddd',
    padding: '8px',
    marginLeft: '10px',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'salmon'
    },
    '@media (max-width: 500px)': {
      color: 'white'
    }
  }
  return (
    <div className="Pet">
      <p>I'm little {name} and I'm {age}</p>
      <input onChange={props.onNameChange} value={name} data-id={`${id}`} />
      <button>Delete Me</button>
    </div>
  )
}

export default pet;
