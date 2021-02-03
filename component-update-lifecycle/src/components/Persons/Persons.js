import React, { Component } from 'react';
import CustomPerson from './Person/CustomPerson';

class Persons extends Component {
    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return (
                <CustomPerson
                    click={() => this.props.clicked(index)}
                    name={person.name} age={person.age} key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            )
        })
    }
}

export default Persons;