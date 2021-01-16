import React, { Component } from 'react';
import './App.css';
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
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })

    /*
      Important: setState code gets merged with the other state. setState with an object where we only
      set showPersons does not mean that the entire state gets replaced with showPersons only, the old
      state persons, another state simply is not touched. React merges the updated showPersons value
      for us into whole state.
    */
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
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {/*
          Rendering Content Conditionally
          The below code is a JavaScript code. It's not a html code. Hence we can work with it as we can
          work with JavaScript code. If we want to render this dynamically we can enclose it in single
          quotation mark, the whole div wrapping the persons. Now, between the quotation marks you learned,
          you can write JavaScript expressions to render content conditionally by adding a ternary 
          expression. You can not add if condition but you can add simple statements, no block statements
          as part of this dynamic syntax.

          We can add a ternary expression which is a default JavaScript construct checks this condition
          by adding a question mark and then we decide what to do if this is true.
        */}

        {
          this.state.showPersons === true ?
            <div>
              <CustomPerson name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <CustomPerson name={this.state.persons[1].name} age={this.state.persons[1].age}
                changed={this.nameChangedHandler}>
                My Hobbies: Racing</CustomPerson>
              <CustomPerson name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
            : null
        }

        {/*
          Rendering Content Conditionally
          The syntax may be confusing but what we will do in the end here is simply take advantage of
          the fact that all we write here, in the end is JavaScript. We can interject JavaScript
          expressions into JSX with single curly braces. This means we can access any JavaScript
          property and use it in a ternary expression. This is a default JavaScript construct. A ternary
          expression is created by having some condition, this doesn't have to be a property, it could
          also be a check where we see if that is true.

          If the condition is true, we are calling React.createElement. We are not calling it explicitly
          but the code we wrote is converted to it behind the scenes. we also have an else condition
          separated by a colon.
        */}
      </div>
    );
  }
}

export default App;
