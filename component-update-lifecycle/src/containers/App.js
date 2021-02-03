import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';

/*
  Module Introduction
  It's the time to dive deeper into components, after all components are the core building block and
  THE feature of the react library. So we definitely have to make sure that we know how they work,
  what happens behind the scenes and what we can do with them.
*/

class App extends Component {

  // Constructor is the first thing that will be executed.
  constructor(props) {
    // Super will execute the constructor of the component you're extending.
    super(props)
    console.log('[App.js] constructor')

    /*
      We can also initialize the state in the constructor. If you are working in a project that does not
      support below modern syntax of state initialization then set the state in the constructor it will
      work fine.
      
      Important: Since you initialize the state, you should set the state like this.state not like
      this.setState because there will be no state to merge this state with.
    */
    this.state = {
      persons: [
        { id: 'abc', name: 'Max', age: 28 },
        { id: 'bcd', name: 'Manu', age: 29 },
        { id: 'cde', name: 'Stephanie', age: 26 }
      ],
      otherState: 'Some other value',
      showPersons: false
    }
  }

  /*
    We can also initialize the state like below. This is a more modern syntax which behind the scenes
    adds the constructor for you, call super props and set the state up in the constructor.
  */

  // state = {
  //   persons: [
  //     { id: 'abc', name: 'Max', age: 28 },
  //     { id: 'bcd', name: 'Manu', age: 29 },
  //     { id: 'cde', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'Some other value',
  //   showPersons: false
  // }

  /*
    After constructor comes the getDerivedStateFromProps. This is a static method, so you have to add
    static keyword in front of it so that React can execute it correctly. You will get props and state 
    in here and you should return your updated state. Here we are just returning the same state.
  */

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  /*
    After rendering of render method, Persons component and CustomPerson component, componentDidMount
    executes.

    IT IS ALSO WORTH HIGHLIGHTING THAT HISTORICALLY, THERE WERE OTHER HOOKS AS WELL AND THESE ARE STILL
    SUPPORTED. One of them was componentWillMount. These hooks were very rarely used and could be used
    incorrectly and therefore will be removed in the future.
  */

  componentWillMount() {
    /*
      It would be called before componentDidMount() and it is hard to explain what kind of work you do
      in here, generally it would be something like preparing your state correctly and that is something
      you would now do in the getDerivedStateFromProps and both were actually relatively seldom to be
      used and therefore componentWillMount will be removed and getDerivedStateFromProps is still here
      but you'll actually not use that too often either.
    */
    console.log('[App.js] componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
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
    After getDerivedStateFromProps, render method executes. Then all the child components will be
    rendered. So all the Persons would be rendered and if that were class-based components, we
    could add the lifecycle there too and see it run for all the Persons. Rather than converting
    our Person to class-based component we will add a console log there because when the component
    gets rendered, even though it's a functional one, the code also gets executed and therefore the
    console log would be printed too.
  */

  render() {
    console.log('[App.js] render')
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
    }

    /*
      How to use this.props in App.js?
      Thus far we only access the state here in the App.js, we access the state to pass our state to the
      Cockpit component. The App.js file doesn't receive any props or the app component doesn't receive
      any props but we can change this. In our index.js file, we can send a prop into our App component
      simply by setting it there (check index.js). Now to use that prop in our App.js file, we need to
      use this keyword to access that prop and you can use the keyword anywhere in your App.js file. But
      I actually want to forward it to the Cockpit component.
    */

    return (
      <div className={classes.App}>
        <CockPit title={this.props.appTitle} showPersons={this.state.showPersons}
          persons={this.state.persons} toggle={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
