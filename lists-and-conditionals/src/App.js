import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import CustomPerson from './Person/CustomPerson'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  /*
    To create a handler method, we can have two ways:
    1. Normal functions
    2. Arrow functions

    1. Normal functions:
    togglePersonsHandler() {

    }
    Using normal function we will have problems, if we want to use this keyword and since we will call
    this method here upon event fired in the DOM, this would lead to real problems.
  */

  togglePersonsHandler = () => {

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <div>
          <CustomPerson name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <CustomPerson name={this.state.persons[1].name} age={this.state.persons[1].age}
            click={this.togglePersonsHandler} changed={this.nameChangedHandler}>
            My Hobbies: Racing</CustomPerson>
          <CustomPerson name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
      </div>
    );
  }
}

export default App;
