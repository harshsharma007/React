import React, { Component } from 'react';
import classes from './Person.css';

/*
    To see these update lifecycle hooks in practice, I will convert Persons and Person component to
    class-based components so that we can throw some lifecycle hooks into these as well. Converting a
    Component to a class-based component is very simple, you simply import component from React because
    we'll need to extend that and then instead of returning a function or having a function that you
    store in a variable or constant here, you create a new class which you typically name with a capital
    starting character like CustomPerson that extends Component and in there you now need a render()
    method which will return JSX code. Moreover, props doesn't exist anymore so all of the props should
    now become this.props. As we have learned, props in class-based components are accessed using this
    keyword since they are properties of this class. Last thing we need to change is the export default.
*/

class CustomPerson extends Component {
    render() {
        console.log('[CustomPerson.js] rendering...')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default CustomPerson