import React, { useState } from 'react'
import './App.css'
import CustomPerson from './Person/CustomPerson'

// We cannot use 'this' keyword in a functional component.

const AppHooks = props => {
    /*
        We are using Array destructuring in the below example. This allows us to pull elements out of the
        array you get back from the right side of the equal sign.
    */
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'Some other value'
    })

    /*
        switchNameHandler is a function inside a function. This is perfectly fine. You can have a
        function definition inside a function.
    */
    const swtichNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        })
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={swtichNameHandler}>Switch Name</button>
            {/*
                Unlike class-based React components we cannot use this.state. We don't have a component
                instead it's a functional component. So we have to use personsState.
            */}
            <CustomPerson name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <CustomPerson name={personsState.persons[1].name} age={personsState.persons[1].age} />
            <CustomPerson name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    )
}

export default AppHooks;