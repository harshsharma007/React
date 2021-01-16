import React, { Component } from 'react';
import './App.css';
import customPerson from './Person/CustomPerson';
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
    /*
      Handling Dynamic Content "The JavaScript Way"
      Important: When React renders something to the screen, when it decides that it needs to update
      the screen, it executes render method, not just the return expression. Everything inside the
      render method gets executed whenever react re-renders this component and therefore we can take
      advantage of this. We can add some code here before we return something.

      With this, we keep the JSX we return and the core template we are using keep it clean. We make
      sure that we only have this tiny reference in the return JSX code. This is the preferred way of
      outputting conditional content.
    */

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {/*
            Outputting Lists
            We have a couple of persons here in our state and this should be our single source of truth. 
            This should be our data source in bigger applications, in real applications, this might be 
            populated from data or with data you fetch from a server.

            For this, we would use single curly braces to render something dynamic within our JSX code. 
            We want to render our persons array in the state. We need to convert this array of JavaScript 
            which is not valid JSX to valid JSX. JavaScript offers us a function to convert arrays, it's 
            a map function. Map simply maps every element in a given array such as our persons array here 
            into something else.

            It does this by executing a method on every element in a given array. In the persons array,
            JavaScript automatically gives us each element as an input to that function, which we execute
            on every element. So in this case it's our person. Now we need to return something. We should
            return what you want to map this item into. We have an array of JavaScript objects and
            persons. We want to convert this into something else. The map method which we are using here
            conveniently simply returns a new array. Our goal simply is to return JSX here so that every
            element of the person's array get mapped into a JSX representative of it.
          */}

          {
            this.state.persons.map(person => {
              return <CustomPerson name={person.name} age={person.age} />
            })
          }
        </div>
      )
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
              {persons}
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
