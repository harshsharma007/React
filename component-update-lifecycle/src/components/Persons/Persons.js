import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    /*
        If you run the code and you will see a warning that in my Persons, I have getDerivedStateFromProps
        and in there we are returning a new state but since I have an uninitialized state, it's not
        recommended using that lifecycle hook, so therefore I am commenting it out.
    */
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state; // Returning an unchanged state
    // }

    /*
        After getDerivedStateFromProps we have shouldComponentUpdate:
        shouldComponentUpdate will get the nextProps, so the upcoming props which will have an effect
        right after this update which is about to take place and the upcoming state (nextState) as
        arguments. In here you have to return true or false, doing nothing is not an option. You have to
        return true if React should continue updating or false if it shouldn't based on some condition
        where you compare the current props to your next props to find out if they changed and if they
        changed, you want to permit this.
    */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    /*
        After shouldComponentUpdate, we have getSnapshotBeforeUpdate and there we get our previous
        props and we get our previous state. getSnapshotBeforeUpdate is a data package which you then
        receive in componentDidUpdate, so that you can save some state right before the update, like
        the scroll position and then you can use it to update the DOM again or update the scrolling
        of the user let's say in componentDidUpdate once the DOM has been re-rendered and to demonstrate
        this here, I'll just return an object with a message of snapshot. In reality you would return
        some coordinates for the scrolling.

        Then in componentDidUpdate, you get the previous props and the previous state and the last
        argument is that snapshot
    */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!' }
    }

    /*
        After render cycle for all the child components, componentDidUpdate will run. If we run the app
        and press the Toggle Person button we will see all lifecycle hooks but not componentDidUpdate.
        Where is componentDidUpdate?

        Well it's nowhere to be seen because right now, we weren't in the update cycle of our Persons
        component. getDerivedStateFromProps only ran because it's also part of the creation lifecycle.
        The udpate lifecycle of Persons.js will run as soon as I type something in the textbox because
        then we'll trigger onChange handler.

        If you have a look in your Person component, we'll trigger the onChange handler of input field,
        which triggers the props.changed. The props.changed in Person.js is forwarded to the
        props.changed of the Person component which is forwarded to the App.js file and in there if
        we have a look, changed calls the nameChangedHandler and this updates our Persons which we pass
        back in as a property to the persons component and therefore in Persons component now the
        updating lifecycle will begin because we forwarded that event from a child to the parent
        component to the App component, there we updated its state and then we got new data as a prop
        into the Persons component and therefore Persons component lifecycle triggers as soon as we type.
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    /*
        For updating, we have two other hooks, componentWillReceiveProps and there you will get the props
        you are getting for this update. While using it we will receive a warning like we had before
        with componentWillReceiveProps, so this setup will not even let me use that. In older apps,
        that would have worked and yes it is removed because it was kind of niche thing. You could have
        used that for updating some internal state but it was easy to use this incorrectly and therefore
        you shouldn't use it anymore.

        The other hook which will also be removed or which is already not supported by some workflows
        is componentWillUpdate. In the past, you had componentWillUpdate right before componentDidUpdate.
        It was hard to justify this hook, it was often used incorrectly and therefore this is also
        removed.
    */
    componentWillReceiveProps(props) {
        console.log('[Persons.js] componentWillReceiveProps', props)
    }

    /*
        After getSnapshotBeforeUpdate render() method will get execute.
    */
    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return (
                /*
                    After render() method, render cycle or the update cycle of all child components
                    will execute (all the Person component in this case).
                */
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name} age={person.age} key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            )
        })
    }
}

export default Persons;