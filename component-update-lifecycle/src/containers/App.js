import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Max', age: 28 },
      { id: 'bcd', name: 'Manu', age: 29 },
      { id: 'cde', name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  /*
    Component Update Lifecycle (for props Changes)
    To look at the lifecycle hook for internal changes when the state changes. We are changing the state
    when people enter something into one of our person inputs and therefore in there, lets also add
    after componentDidMount, componentDidUpdate and you could also add the get snapshot before update
    hook if you wanted to.

    And, I'll add one another hook before componentDidUpdate and that will be shouldComponentUpdate
    where I get my next props and my next state.

    Important: componentDidMount, componentDidUpdate and also for performance improvements,
    shouldComponentUpdate are the most important hooks because in componentDidMount and componentDidUpate,
    you will typically do things like fetching new data from a server, shouldComponentUpdate can be
    used for performance improvements.
  */

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true

    /*
      shouldComponentUpdate has to return something, if you're returning undefined this is basically
      treated as false and therefore it will block the update. If you return false and check the toggle
      button, toggling won't work anymore because it will prevent the update.
    */
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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
    console.log('[App.js] render')
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <button onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
        {
          this.state.showCockpit ?
            (
              <CockPit title={this.props.appTitle} showPersons={this.state.showPersons}
                persons={this.state.persons} toggle={this.togglePersonsHandler} />
            ) : null
        }
        {persons}
      </div>
    );
  }
}

export default App;
