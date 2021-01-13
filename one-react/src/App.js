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

    This is the well established way and also the default way of creating components in React.
  */

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value'
  }

  /*
    Convention to give name to the event handler method like following:
    switchNameHandler

    switchName depends up to you but you typically use handler here to indicate that this is a method
    you're not actively calling but you're assigning as an event handler. It's not required to follow
    this pattern, you can name this whatever you want but it is a good practice to name it like this.

    It is a property which holds a function which can be executed. It can be used as an arrow function.
    While calling this event handler on the onClick event of a button don't add parentheses. This would
    execute it immediately once react renders this to the DOM because you execute this function with
    the parentheses. We only need to pass a reference and we do this by using this and then referring
    to that property which holds a function.
  */

  switchNameHandler = (newName) => {

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
      change. Instead use a special method React gives you.
    */

    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })

    /*
      setState method allows us to update this special state property here and it will then ensure that
      React gets to know about this update and updates the DOM. setState takes an object as an argument
      and it will merge whatever we define here with our existing state.

      Functionality: Now React will look at our state and see which part of it we're overwriting, we're
      changing (persons). It will not discard other state but it will simply merge the old state with
      the new one. It will overwrite "persons" since we clearly defined a new version of "persons" but
      will leave other state untouched because we're not saying anything about it here and it will not
      discard it (which is a good thing  because you don't have to update everything about your state
      whenever you want to change only a tiny piece about it).

      If state changes or props changes, it analyzes the code it already rendered to the DOM and the code 
      it would now render, if it were to re-render everything and then it updates the existing DOM in all 
      the places where it needs to update it to reflect your new state and props.
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

        <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <CustomPerson name={this.state.persons[0].name} age={this.state.persons[0].age} />

        {/*
          Passing Method References between Components

          If we want to call a method (switchNameHandler) not only on the click of button but also
          on the click of a paragraph (p tag) inside a CustomPerson component, we could add onClick
          on p tag of the CustomPerson component. But we can't call that handler method in a different
          file. We can actually pass a reference to this handler as a property to our component.

          We can add a new property which we can name anything (name is totally up to you). Then we
          can pass a reference to this.switchNameHandler. And in CustomPerson we can simply call
          this reference using props.click

          This is important to understand, you can pass methods also as props so that you can call a
          method which might change the state in another component which doesn't have direct access to
          the state and which shouldn't have direct access to the state.

          It's important to know, you can pass down click handlers which allow you to change data in the
          parent component (in the app component in this case for the person component). If we also
          want to pass a value to our function, then switchNameHandler should receive the newName.

          How do we pass that data?
          There are two ways of doing that:
          1. The first is that you call bind and then simply bind this. "this" controls what this inside
             the function (switchNameHander) will refer to and by binding it to this here outside of the
             function we're binding it to the class might look strange but is a typical way of handling
             the this issue in JavaScript, we wouldn't have need to do that though. But we can use this
             syntax because I also want to pass the second argument to bind. this now is the list of
             arguments which will be passed into our function and here this should be the newName. To see
             the difference, let's copy that bind code and let's also bind it down here when we pass the
             function as a reference to the click prop.
          
          2. Other way is to execute an arrow function which takes no arguments (theoretically it would
            receive an event object) on the onClick event. Then simply as a function body returns this
            function call.
            Concept:
            When using an arrow function this implicitly adds a return keyword in front of the code which
            comes directly after the arrow if it's all written in one line. The alternative is to wrap
            this in curly braces and write a normal function body.
            This would return a function call that's why I added parentheses. Here it is not getting
            executed immediately. Instead what we pass here is an anonymous function which will be
            executed on a click and which then returns the result of this function getting executed.
            We can easily pass our data in the parentheses.

            Second way is not recommended because it can be inefficient. Instead, use the bind function 
            to pass any argument to the function.
        */}

        <CustomPerson name={this.state.persons[1].name} age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Max!!')}>
          My Hobbies: Racing</CustomPerson>
        <CustomPerson name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
