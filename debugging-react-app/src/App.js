import React, { Component } from 'react';
import classes from './App.css';
import CustomPerson from './Person/CustomPerson';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    /*
      Finding Logical Erros by using Dev Tools & Sourcemaps
      Let's say the nameChangedHandler, where we find the index of a person we want to update, let's
      say we compare userId with Id.

      This is incorrect because a person has no userId property. It will not throw an error because
      userId is undefined but you can compare undefined to something, you probably won't find a fitting
      person. If you run the application now and try to update the value, the updated value won't be
      reflected because now the two way binding has been broke.

      What can we do in such a case (logical error)?
      We can walk through our code step by step. For that Chrome developer tools are recommended.
      There you can go to the sources tab, in the sources tab you will find your code structure shown
      under localhost, there you will find the source folder and you will find your code here as well.
      This is possible due to source maps which are generated. Basically you could say translation files
      allowing the browser developer tools to go into your code as you wrote it and allow you to debug
      that code even though the code which is shipped to the browser will be a different one, an
      optimized and bundled one. This is pretty cool because you can debug the code you wrote even
      though it's not the code running in the browser.

      In there, we know something's not working when I type here and as we wrote the code, we know that
      the nameChangedHandler is getting fired when we type. So let's place a breakpoint by clicking on
      a line number here and let's start typing again. I typed one character and that's now pausing this,
      you see it's adding this 'i' because that's default behavior of the html element and we haven't
      execute all the code which would overwrite that again, and now we can use the normal chrome
      debugger tools here to walk through our code. And here we can step into the next function call to
      step into this find index function and understand what's happening there.

      So now inside there, we can have a look at the data we have available there like the p object. We
      see this is for Max, this is the object it's currently looking at with find index and we have an
      Id of 'abc'. We also see that this expression here is undefined and we compared this to an Id of
      'abc'. So whilst this should match this person that has this Id, since we access userId we can
      see it's undefined. We can clearly see that userId is not a valid Id because if we hover over the
      person again, we see there only id Id object, no userId object.
    */

    const personIndex = this.state.persons.findIndex(p => {
      // return p.id === id
      return p.userId === id
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value

    /*
      Understanding Error Messages
      To generate manual error, let say we change the event.target.value to event.input.value which is
      incorrect. Now, if we run the application and starts typing in the textbox, it will throw an
      error. In our development workflow, we even get a nice display of the error in the middle of the
      screen. Let's focus on the error message (in the developer tools F12). Always scroll up all the 
      way to the top to see your error message and there you will see "Cannot read property 'value' of
      undefined".

      You also get a hint at where this occurred in nameChangedHandler, App.js line 27. Sometimes error
      messages are less helpful than this one is, even if the error message itself is cryptic. Most of
      the time you should get a helpful line number which allows you to go back into your code and try
      to find out what's wrong about this line.
    */

    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  /*
    Working with the React Developer Tools
    Sometimes you want to know the current state of your react app and wealth. You might be able to
    figure that out with the developer tools. It can be inconvenient. There is an extension you can add
    to Chrome, The React Developer Tools. When you run the developer tools, there you would be able to
    find two tabs "Components" & "Profiler". If you click on components you should see the representation
    of the react components currently rendered on the screen. At the botton you'll also see props this
    component receives and state this component manages.

    If you click "Toggle Persons" we would also see customPerson components. We can click on those to
    see the props these components get which components render them and so on. These things are not
    only to inspect a value but we can change the value of any prop and the things are reflected to the
    DOM.
  */

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null
    let btnClass = ''

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            /*
              ErrorBoundary is so called higher order component, it's a component which simply wraps a
              component with the goal of handling any errors that component might throw. With the
              ErrorBoundary we also have to remove key from CustomPerson component and add that key to
              the ErrorBoundary component because this is now the outer element which we map and the key
              always has to be on the outer element in a map method because that's the element we
              actually replicate.

              Now if you run the application and click the TogglePersons button, you will still see the
              error in the middle unfortunately. That only happens during the development mode. Once 
              you've built this for production and ship it to a real server, it will not overwrite your
              page like this. Instead what you will see is whatever you render inside your error boundary
              like the error message or any other default message you have.

              This does not mean that you should cluster your whole application with error boundaries,
              only use them when it makes sense. Basically only use them if you have some code you know
              that it may fail, don't wrap any other code because if normal code fails, you as a
              developer probably made a mistake during development.
            */

            this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <CustomPerson click={() => this.deletePersonHandler(index)}
                  name={person.name} age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
            })
          }
        </div>
      )

      btnClass = classes.Red
    }

    /*
      Using Error Boundaries
      Check Custom Person Component.
    */

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>

        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>

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
