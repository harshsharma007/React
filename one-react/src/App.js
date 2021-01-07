import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import CustomPerson from './Person/CustomPerson'

class App extends Component {
  /*
    state is declared as a JavaScript object. Props simply are an object giving us access to all the 
    attributes we pass to our own components. Sometimes, you don’t want to get some information from 
    outside but you want to have it inside a component and change it from inside there too. For example, 
    in our App.js file, let’s say we also want to add a button which if we click it simply switches one 
    of the names we use in the Person example.

    Important: This state property is only available in components that extend components, only in 
    class-based React components. With React 16.8, a new feature was released called React hooks with 
    which you can also manage state in functional components. State is a reserved word.

    Default way of adding a state is to add a state in class based component. You should use functional 
    components as often as possible because you should use state with care because having state in all 
    your components and manipulating it from anywhere in your app makes your app quickly unpredictable 
    and hard to manage especially as it grows.

    State is a special property. State can be changed and if it changes and that’s the special thing 
    about it and it only works on that state property, if it changes it will lead React to re-render our 
    DOM or to update the DOM.
  */

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

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

        <button>Switch Name</button>
        <CustomPerson name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <CustomPerson name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</CustomPerson>
        <CustomPerson name={this.state.persons[2].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
