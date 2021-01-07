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

  /*
    Convention to give name to the event handler method like following:
    swtichNameHandler

    switchName depends up to you but you typically use handler here to indicate that this is a method
    you're not actively calling but you're assigning as an event handler. It's not required to follow
    this pattern, you can name this whatever you want but it is a good practice to name it like this.

    It is a property which holds a function which can be executed. It can be used as an arrow function.
    While calling this event handler on the onClick event of a button don't add parentheses. This would
    execute it immediately once react renders this to the DOM because you execute this function with
    the parentheses. We only need to pass a reference and we do this by using this and then referring
    to that property which holds a function.
  */

  switchNameHandler = () => {

    /*
      Important: If you don't use the arrow function here bascially where you assign a function to a 
      property, you will run into errors if you try to use "this" in the switchNameHandler function
      because this will then not refer to the class at the runtime.

      By using this ES6 syntax, we circumvent this problem which will become important later.

      The below syntax will only work in arrow function, otherwise this here will not refer to the class
      and will therefore not be able to reach that state property.
    */

    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'

    /*
      If we use the above code, we will get a warning -> "Do not mutate state directly. Use setState()".
      It means changing the state like this will not be recognized by React and will not pick up this 
      change.
    */
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

        <button onClick={this.switchNameHandler}>Switch Name</button>
        <CustomPerson name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <CustomPerson name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</CustomPerson>
        <CustomPerson name={this.state.persons[2].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
