import React from 'react';
import classes from './Person.css';

/*
    A Better Project Structure
    Thus far we only use two components, the app component (our main component) container which contains
    our state and the person component, a functional component which simply outputs one single person.
    With these two components together, we get our output. But we can tweak this application further.
    For example, you would typically split this application in more components than that, the question
    always is what should go into its own component and what do you group together in a higher component,
    in the root component for example.

    If we analyze our existing components, we see that the person component is pretty focused, it displays
    the card of one person, the information of one person, it handles the click on that card. So this
    component doesn't need any more splitting up, what would you put into its own component? You could
    outsource the input into its own component, that might make sense if you want to create a generic
    input component across your application where you only change the styling. But if that's not the goal,
    putting input into its own component doesn't make much sense. So for us we can definitely leave it 
    here. And same for the paragraphs, if you want to create some custom paragraph wrapper component which 
    gives all your paragraphs some specific styling and behavior, you might want to put into its own 
    component. If it's only about the global styling, use the global stylesheet, the index.css file and
    simply set up your styles there. So the person component really is finished.

    We can split our App.js file, we managed the state there and we actually do a lot of things there,
    if we look at our render method which in the end decides what this component is responsible for
    rendering, we see that we rendered a list of persons here but then we also have Toggle Person button.
    Typically container components like the App.js component, which also manage state shouldn't be
    involved with the UI rendering too much. Put in other words, the render method should rather be
    lean and should not contain too much JSX.
*/

const customPerson = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default customPerson