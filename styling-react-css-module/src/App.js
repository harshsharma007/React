import React, { Component } from 'react';
import './App.css';
import CustomPerson from './Person/CustomPerson';

/*
  Working With CSS Modules
  Another way of scoping styles to your components or writing styles which only get applied to a specific
  component instead of the entire application because that is an important thing. Often you really want
  to make sure that your styles don't apply everywhere in your application but only to certain parts.

  That can be achieved with a novel concept as well CSS Modules. For CSS Modules to work, we need to
  tweak the configuration of our project a little bit. The underlying build configuration, the
  configuration which takes our code transforms it and bundles it together. To be precise, we need to
  tweak the configuration if we're using React scripts version 1 (check package.json file).

  If you are using React scripts version 2 or higher you have an alternative approach of enabling this
  feature which we will cover later. For version 1, you need to quit your development server and then
  run NPM eject in your project folder. What this will do is it will eject from this under the hood
  configuration where you don't really have access to the underlying web packed conflict file and so on
  and give access to the conflict files so that you can tweak how your code is bundled together and
  so on and there is something we will need to tweak there.

  npm run eject
  is the command you need to run on the terminal of VS Code.
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
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={this.state.showPersons ? 1 : 0} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>

        {
          this.state.showPersons === true ?
            <div>
              {persons}
            </div>
            : null
        }
      </div>
    );
  }
}

export default App;
