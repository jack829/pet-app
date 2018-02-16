import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import './App.css';
import Pet from './Components/Pet';

class App extends Component {
  state = {
    pets: [
      { id: uuidv1(), name: 'Sohpie', age: 4 },
      { id: uuidv1(), name: 'Molly', age: 16 },
      { id: uuidv1(), name: 'Lyla', age: 5 }
    ],
    showPets: true
  }

  onNameChange(index, event) {
    const [...petsCopy] = this.state.pets;
    petsCopy[index].name = event.target.value;
    this.setState({
      pets: petsCopy
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.showPets ?
          this.state.pets.map((pet, index) => {
            return <Pet key={pet.id} info={pet} onNameChange={this.onNameChange.bind(this, index)} />
          })
        : <h1>Pets Hidden</h1> }
      </div>
    );
  }
}

export default App;
