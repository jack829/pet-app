import React from "react";
import Aux from "../../hoc/Aux";
import Pet from './Pet/Pet';

const pets = (props) => {
  return (
    <Aux>
      {props.pets.map((pet, index) => {
        return <Pet
                  key={pet.id}
                  info={pet}
                  changeInput={props.changeInput.bind(this, index)}
                  clickDelete={props.clickDelete.bind(this, index)}
                />
      })}
    </Aux>
  )
}

export default pets;
