import React from "react";
import Pet from './Pet/Pet';

const pets = (props) => {
  return (
    <div>
      {props.pets.map((pet, index) => {
        return <Pet
                  key={pet.id}
                  info={pet}
                  changeInput={props.changeInput}
                  clickDelete={props.clickDelete.bind(this, index)}
                />
      })}
    </div>
  )
}

export default pets;
