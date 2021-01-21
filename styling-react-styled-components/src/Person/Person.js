import React from 'react'
import Radium from 'radium'

const person = () => {
    return <p>I'm a Person and I am { Math.floor(Math.random() * 30) } years old!</p>
}

export default Radium(person);