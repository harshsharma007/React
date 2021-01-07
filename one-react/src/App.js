import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import CustomPerson from './Person/CustomPerson'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person />

        {/*
          For normal html elements, we can pass attributes like className which we can add to any html
          attribute, input element also have the value attribute. To make Person component more flexible,
          dynamic and configurable, it would be nice if we can pass some attributes.
        */}
        <CustomPerson name="Max" age="28" />
        <CustomPerson name="Manu" age="29" >My Hobbies: Racing</CustomPerson>
        <CustomPerson name="Stephanie" age="26" />
      </div>
    );
  }
}

export default App;
