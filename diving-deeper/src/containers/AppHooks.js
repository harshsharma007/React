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
    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
            /*
                One way of doing is like this. But the more elegant way is actually to not manually
                merge your states but instead use useState multiple times, whereas in class-based
                components you only have one state property and this setState automatically merge changes
                with the old state to not discard any state, here you can have multiple useState calls.
            */
            // otherState: personsState.otherState
        })
    }

    /*
        Now if you log personsState and otherState. This is how you manage state in a functional
        component with React Hooks. You don't have one big state object, you could manually merge it.
        Instead, you have multiple separated state slices. This is the useState hook and this is a
        glimpse at React hooks in general.

        React Hooks is all about these use something functions with useState being the most important,
        that allows you to add functionality to functional components, like here useState allows us to
        add state management to functional components.
    */
    const [otherState, setOtherState] = useState('Some other value')
    console.log(personsState, otherState)

    /*
        There is one important difference to the state in a class-based component, it generally looks
        like it works the same but it doesn't.

        If you console.log(personsState). First time when the page is loaded 'otherState' gets loaded.
        When we click Switch Name button 'otherState' is missing. When you're using React Hooks, your
        function 'setPersonsState' which you get as the second element in that array does not merge
        whatever you pass to it with the old state, instead it replaces the old state with it.

        Important: Whenever you're updating state like this, you have to manually make sure you include
        all old state data.
    */

    console.log(personsState)

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            {/*
                Unlike class-based React components we cannot use this.state. We don't have a component
                instead it's a functional component. So we have to use personsState.
            */}
            <CustomPerson name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <CustomPerson name={personsState.persons[1].name} age={personsState.persons[1].age} >
                My Hobbies: Racing
            </CustomPerson>
            <CustomPerson name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    )
}

export default AppHooks;