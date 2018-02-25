import React, { PureComponent } from 'react';
import uuidv1 from 'uuid/v1';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
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
    showPets: true,
    numToggleClicked: 0
  }

  onNameChangeHandler(index, event) {
    const [...petsCopy] = this.state.pets;
    petsCopy[index].name = event.target.value;
    this.setState({
      pets: petsCopy
    });
  }

  onToggleClicked() {
    // Do not reference this.state directly inside of the setState method as it is asynchronous so the
    //   status of this.state at the time of its execution is not reliable
    this.setState((prevState, props) => {
      return {
        showPets: !prevState.showPets,
        numToggleClicked: prevState.numToggleClicked + 1
      }
    });
  }

  onDeleteHandler(index) {
    const petsCopy = [...this.state.pets];
    petsCopy.splice(index, 1);
    this.setState({ pets: petsCopy });
  }

  render() {
    return (
      <Aux>
        <Cockpit clicked={this.onToggleClicked.bind(this)} />
        {this.state.showPets ?
          <Pets
            pets={this.state.pets}
            changeInput={this.onNameChangeHandler.bind(this)}
            clickDelete={this.onDeleteHandler.bind(this)}
          />
          : <h1>Pets Hidden</h1>}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
