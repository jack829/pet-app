import React, { PureComponent } from 'react';
import uuidv1 from 'uuid/v1';
import classes from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit';
import Pets from '../Components/Pets/Pets';

class App extends PureComponent {
  state = {
    pets: [
      { id: uuidv1(), name: 'Sohpie', age: 4 },
      { id: uuidv1(), name: 'Molly', age: 16 },
      { id: uuidv1(), name: 'Lyla', age: 5 }
    ],
    showPets: true
  }

  onNameChangeHandler(index, event) {
    const [...petsCopy] = this.state.pets;
    petsCopy[index].name = event.target.value;
    this.setState({
      pets: petsCopy
    });
  }

  onToggleHiddenHandler() {
    const petsShown = this.state.showPets;
    this.setState({ showPets: !petsShown });
  }

  onDeleteHandler(index) {
    const petsCopy = [...this.state.pets];
    petsCopy.splice(index, 1);
    this.setState({ pets: petsCopy });
  }

  render() {
    return (
      <div className={classes.App}>
        <Cockpit clicked={this.onToggleHiddenHandler.bind(this)} />
        {this.state.showPets ?
          <Pets
            pets={this.state.pets}
            changeInput={this.onNameChangeHandler.bind(this)}
            clickDelete={this.onDeleteHandler.bind(this)}
          />
          : <h1>Pets Hidden</h1>}
      </div>
    );
  }
}

export default App;
