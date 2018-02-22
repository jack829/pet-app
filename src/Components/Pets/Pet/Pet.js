import React, { PureComponent } from 'react';
import classes from './Pet.css';

const pet = (props) => {
  const { name, age, id } = props.info;
  return (
    <div className={classes.Pet}>
      <p>I'm little {name} and I'm {age}</p>
      <input onChange={props.changeInput} value={name} data-id={`${id}`} />
      <button className={classes.delete} onClick={props.clickDelete}>Delete Me</button>
    </div>
  )
}

export default pet;

// class Pet extends PureComponent {

//   render() {
//     const { name, age, id } = this.props.info
//     return (
//       <div className={classes.Pet}>
//         <p>I'm little {name} and I'm {age}</p>
//         <input onChange={this.props.changeInput} value={name} data-id={`${id}`} />
//         <button className={classes.delete} onClick={this.props.clickDelete}>Delete Me</button>
//       </div>
//     )
//   }
// }

// export default Pet;
