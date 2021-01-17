import React, { Component } from 'react';
import './App.css';
import CustomPerson from './Person/CustomPerson'

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

    //const personAlternate = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value
    
    const persons = [...this.state.persons]
    persons[personIndex] = person
    
    this.setState({ persons: persons })
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

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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

            Lists & State
            When I click the person I want to execute this method and I want to delete this person. For
            that, we need to know which person is this. For this, map method also exposes a second
            argument, index in the array. If you use more than one argument in an ES6 arrow function,
            you have to wrap the arguments in parentheses.

            Updating State Immutably
            The flaw of this approach is that in JavaScript, objects and arrays are reference types,
            when I get persons from my state I actually get a pointer to the original person's object
            managed by React, to the original state. If I then splice it here, I already mutate this
            original data and whilst it does work without throwing an error, this is not really how
            you should do it, this can lead to unpredictable apps and is definitely a bad practice.

            A good practice is to create a copy of your persons array before manipulating it and a simple
            way of doing this is by calling the slice method. Slice without arguments simply copies
            the full array and returns a new one which is then stored here. An alternative to this
            approach would be to use an ES6 feature, the spread operator. This appraoch is the better 
            approach because you should always update state in an immutable fashion, so without mutating 
            the original state first.

            Lists & Keys
            The key prop is an important property we should add when rendering lists of data and that
            is why react tells us to do so. We haven't specified a key property in person. It's a
            default property react expects to find on an element no matter if it's a custom component
            or a default html element which you render through a list, basically by mapping an array
            into JSX elements. This key property helps react update the list efficiently.

            Consider the case we have here that we delete elements from the list, of course it works.
            But behind the scenes react needs to find out what it actually needs to adjust in the
            overall DOM. It has a Virtual DOM where it compares what it would render now if it were to
            call the render method now or if it did actually adjust the real DOM with the result of the
            render method to the previous DOM it rendered. It does this compression of the future with
            the past basically. And for lists, it of course needs to find out which elements changed 
            and react isn't human, it doesn't clearly see as we do that we have three distinct elements
            with different names being rendered.

            So it doesn't see that this is Max, Manu and Stephanie, to react, it's just has a bunch of
            person components and it doesn't deeply inspect them that would be super inefficient. So
            by default it will just re-render the whole list and for a long list this is very inefficient.
            That is why we should assign a key property to allow react to keep track of the individual
            elements so that it has a clear property it can compare between the different elements to
            find out which elements changed and which didn't. So that it only re-renders the elements
            which did change and not the whole list.

            Flexible Lists
            To add an onChange event to the textbox we need to add pass props to the event listener,
            which correctly updates the state. We can provide changed and call nameChangedHandler. In
            nameChangedHandler we need two pieces of information. I need to get the events, to get access
            to the event target value, to what the user entered. But, I also expect a second input.
            I want to get the ID of the user to udpate or the index in the array. Since we have IDs in
            the array, we can use it.

            Therefore, I will use this function syntax to conveniently pass that data. The overall
            function is the one which gets executed upon the onChange event. Here is where we get the
            event object just as we before got it when we didn't assign any function at all directly
            in the nameChangedHandler, now we get it here because this is now the first function which
            gets executed, this anonymous function we define here.

            I can then pass it on to the nameChangeHandler and I also want to pass person ID to it. The
            person ID of course is available since we're inside the map method here. So we got access to
            the person and hence to the ID. With that we can now use that information in the
            nameChangedHandler. We want to update the state, but only for the person into which input
            field we typed. We need to find that person and we can do this by reaching out to the state,
            to the persons there and by calling find. find is a default JavaScript method which gives
            us the person.

            We can also use "findIndex" to find the element in an array and then get the index of that
            element, but we want to take advantage of the ID. findIndex takes a function as an input
            just as map did and just as a map, it will execute this function on every element in the
            array. So here I will execute a function where I get the person as an input and then I get
            the function body. In the function body, check if this is the element I was looking for or
            not.

            Then simply get the person itself by reaching out to these state persons and accessing the
            element at the personIndex. JavaScript objects are reference types so we shouldn't mutate
            them directly because we only get a pointer when we reach out to person and hence we would
            mutate the original object to which this pointer points. So the better approach is to create
            a new JavaScript object and then use the spread operator.

            Just like with the arrays it's also available for objects and it will distribute all the
            properties of the object we fetch into this new object we're creating. An alternative
            approach is to use (not recommended) object.Assign a default JavaScript function where we
            pass an empty object as the first argument and then the object which properties you want
            to assign into it as the second argument.
          */}

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
              {/* <CustomPerson name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <CustomPerson name={this.state.persons[1].name} age={this.state.persons[1].age}
                changed={this.nameChangedHandler}>
                My Hobbies: Racing</CustomPerson>
              <CustomPerson name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
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
