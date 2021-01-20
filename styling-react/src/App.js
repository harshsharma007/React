import React, { Component } from 'react';
import './App.css';
import CustomPerson from './Person/CustomPerson'
import Radium, { StyleRoot } from 'radium'

/*
  Everything is JavaScript
  To dynamically adjust styles or class names and to work around the restriction of either using inline
  styles and hence having scoped styles but having limitations like not being able to use media queries
  or pseudo selectors or using CSS files and then having global styles.
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

  /*
    Adding and Using Radium
    Limitation of inline styles is we can't assign a hover style for our button. It's a pseudo selector.
    It would be nice if we could use pseudo selectors and media queries in our normal JavaScript inline
    styles, and by default that's not possible, but we can add a third party package to add this
    functionality to our application.

    To install this package use the below command:
    npm install --save radium
    --save will save an entry in package.json

    Radium is a popular package for react which allows us to use inline styles with pseudo selectors and
    media queries.
  */

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      /*
        Using Radium, if you want to add a hover style, you can simply add a new property ':hover' or
        any other pseudo selector. All pseudo selectors are supported, you need to wrap them in
        quotation marks because they start with a colon, they are not valid JavaScript property names.
      */
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <CustomPerson click={() => this.deletePersonHandler(index)}
                name={person.name} age={person.age} key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      )

      /*
        Example of "Setting Styles Dynamically"
        Here we are not creating a new variable style. We are just changing the property value of style.
      */
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    // let classes = ['red', 'bold'].join(' ') // Output -> "red bold"

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>

          {/*
            Setting Class Names Dynamically
            Depending on the length of the elements in my person's array here, below 2 or less elements
            "This is really working!" text would turn red, 1 and less red and bold.
          */}

          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

          {
            this.state.showPersons === true ?
              <div>
                {persons}
              </div>
              : null
          }
        </div>
      </StyleRoot>
    );
  }
}

/*
  This is called higher order component. It's just a component wrapping your component injecting some
  extra functionality. You can use this on both of the components, components created with class and
  functional components.
*/
export default Radium(App);
