import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import CustomPerson from './Person/CustomPerson';

/*
  Introducing Styled Components
  Styled Component is a package which gives us a very popular way of combining CSS and JavaScript where
  we write normal CSS but we mix it with JavaScript syntax and styled components package then does all
  the magic of extracting it and putting it into CSS class and adding this class dynamically to the
  button which the button method creates and then we can use this here as a regular React component which
  just happens to have some styles attached to it.
  
  Another package you can use for CSS is the styled components library. This library is all about
  styling components and making that very simple on style-components.com. To install this library
  run the below command:

  npm install --save styled-components

  Sample Code
  import styled from 'styled-components'
  const Button = styled.button``

  The two `` is a regular JavaScript. It's a feature called tacked templates. It is available in vanilla
  JavaScript. It is a function call so button here would be a function or a method on the styled object
  to be precise and instead of having parentheses with function arguments as you're used to, you instead
  have to backticks between which you can pass text and then this text is passed into the spot method.
  Backticks in JavaScript can be used to create template literal.
*/

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`

/*
  You need to add '&' infront of hover pseudo selector. This will tell the styled components package that
  this belongs to the button which is spread out and that there it should apply this hover style.

  We don't need to apply inline CSS on the button anymore but we can still add onClick because the
  button created by the style components package has all the normal props every button has.

  How can we change styles conditionally like we have earlier when we clicked the button and it shows
  that the list of person and the button color changes to red. For that we need to pass the prop to the
  StyledButton any prop of our choice and then pass the value {this.state.showPersons}.

  If we want to change the style of showPersons here (because previously we changed styles in the if block)
  now we are just forwarding this.state on the alt prop to StyledButton. Now the only question is how
  can we use this alt prop inside of our StyledButton component to change the background color or to
  hover styles.

  For that we can use a neat feature, the backticks is a template literal it's regular JavaScript which
  in the end creates a string. We can dynamically inject our content with a special syntax. This is just
  JavaScript nothing to do with React.

  You can add a dollar sign and then two curly braces here this allows you to dynamically insert
  something into this long string which is created here. And here we actually can get a function where
  we receive props and then we have to return a value we want to render in this place and we can check
  if props.alt (which is the prop we added to the StyledButton) is true or not. If it's true then
  we want to have 'red' background otherwise we want to have 'green'.

  The dynamic expression here is also passed into the button method automatically by JavaScript. This
  also is a syntax or usage of the template literal, which the styled components package understands.
  If we inject such a function into that style string the styled components package will have a look
  at it and will pass in the props that we pass to the button to that function so we can expect that as
  an argument to that function here and then we can use the props here and returned a text which should
  be output here and which should be used in the style in the end.

  And now we accomplish our desired output. If you inspect again and check the head tag you will see
  conditional styles of color green and color red with different CSS classes. Styled components package
  will simply swap these classes based on our condition.
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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

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

      // style.backgroundColor = 'red'
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
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
