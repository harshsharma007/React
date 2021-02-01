import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';

/*
  Module Introduction
  It's the time to dive deeper into components, after all components are the core building block and
  THE feature of the react library. So we definitely have to make sure that we know how they work,
  what happens behind the scenes and what we can do with them.
*/

class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Max', age: 28 },
      { id: 'bcd', name: 'Manu', age: 29 },
      { id: 'cde', name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
    }

    /*
      How to use this.props in App.js?
      Thus far we only access the state here in the App.js, we access the state to pass our state to the
      Cockpit component. The App.js file doesn't receive any props or the app component doesn't receive
      any props but we can change this. In our index.js file, we can send a prop into our App component
      simply by setting it there (check index.js). Now to use that prop in our App.js file, we need to
      use this keyword to access that prop and you can use the keyword anywhere in your App.js file. But
      I actually want to forward it to the Cockpit component.
    */

    return (
      <div className={classes.App}>
        <CockPit title={this.props.appTitle} showPersons={this.state.showPersons}
          persons={this.state.persons} toggle={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
