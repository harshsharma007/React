import React from 'react';
import classes from './Cockpit.css';

/*
    If we return multiple elements without a root node it will throw an error because this is not
    supported here. We will dive into ways of supporting this in the next lectures for now, let's simply
    wrap it into a div but again, we will find other ways of not having to use this div over the next
    lectures because React 16 offers us alternatives. By the way, we already see one alternative in 
    persons, there we return a list and of course this means that we have multiple person objects
    sitting next to each other, there is no wrapping div but this is okay for React 16, this is a
    feature which is supported, if you return a list that is OK, you just may not hardcode elements
    next to each other.
*/

const cockpit = (props) => {
    const assignedClasses = []
    let btnClass = ''
    if (props.showPersons) {
        btnClass = classes.Red
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red) // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.toggle}>Toggle Persons</button>
        </div>
    )
}

export default cockpit;