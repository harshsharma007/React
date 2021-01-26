import React from 'react';
import classes from './Person.css';

/*
    Using Error Boundaries
    Sometimes, you have code which might fail at runtime and you know that but you can't guarantee that
    it always works. In this case you probably want to show a nice screen or at least a custom error
    message to the user. Like in the example below, there is 30% chance of breaking the code and throwing
    an error to the user.

    In this case, it would be nice to then at least catch this error and handle it graciously. For this,
    I will create a new component and this is a new feature which was added with React 16. I will name
    it ErrorBoundary because you can create so-called error boundary components there. The name is up to
    you, the concept is known as Error Boundary but you can name this component whatever you like.
*/

const customPerson = (props) => {
    const rnd = Math.random()
    if (rnd > 0.7) {
        throw new Error('Something Went Wrong');
    }    
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default customPerson