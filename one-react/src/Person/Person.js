import React from 'react'

/*
    We need to import 'react' because this JSX syntax is transformed to React.createElement().
    We don't need to import 'Component' because we're not using a class which extends component, instead
    we're creating a function.
*/

const person = () => {
    /*
        If we have some dynamic content in our JSX part which we want to run as JavaScript code and not
        interpret as text, we have to wrap it in single curly braces.
    */
    return <p>I'm a Person and I am { Math.floor(Math.random() * 30) } years old!</p>
}

/*
    We need to export this function as a default of this file,
*/
export default person;