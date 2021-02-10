import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    /*
        Using useEffect() in Functional Components
        In here, we can't add componentDidMount or anything like that but we can of course manage state
        using useState(). We can also use another hook known as useEffect. useEffect is the second most
        important React hook you can use next to useState because useEffect combines the functionality
        or the use cases you can cover of all these class-based lifecycle hooks in one React hook here
        and both is called hook, it's not related. This is not a lifecycle hook, this is a React hook.
        Bascially a function you can add into one of your functional components.

        How does it work?
        You can add it anywhere here in your functional component body and useEffect, as a default takes
        a function that will run for every render cycle. After adding useEffect and saving the file and
        running again, you will see "[Cockpit.js] useEffect" in output.

        The function passed to the useEffect does not take any arguments but it has to be a function,
        and this will execute for every render cycle of the Cockpit. After clicking on the toggle button
        you will see it again because we have changed something and that re-rendered that Cockpit.
        If I now type something here, we see useEffect again. If we type something in the textbox, we
        would see "[Cockpit.js] useEffect" again. Although, nothing is changed in the Cockpit if I type
        but we haven't added any performance optimizations. React will basically re-render App.js
        when we type because in App.js, we manage the state of the persons and that state changes when
        we type and therefore it calls the render method of App.js and in there, we include our Cockpit
        and the Cockpit gets re-rendered too.

        The re-rendered means not in the real DOM but in the virtual DOM, React will check if it needs
        to touch the real DOM. So useEffect runs here, it runs for every update and this means we can
        already use it for all the things we would have done in componentDidUpdate and indeed that is
        OK. If you need to send an HTTP request or anything like that in here, you can do that.

        It also obviously runs when the component is created, the cockpit is created because it executes
        for every render cycle. So it is componentDidMount and componentDidUpdate combined in one effect.
        Some hooks like getDerivedStateFromProps is not included in here but you also don't really need
        it because if you have props here and you want to base your state on that, then you can useState
        and pass some data from your props as an initial state into this, right? So you have that built
        into this because it is a functional component per definition. useEffect is for the other,
        more important and useful lifecycle hooks.
    */

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // HTTP request...
        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000);
    }, [props.persons])

    /*
        Controlling the useEffect() Behavior
        useEffect can be tricky to use because right now it runs all the time, it combines
        componentDidMount and componentDidUpdate.
        
            useEffect(() => {
                console.log('[Cockpit.js] useEffect')
            })
        
        What if we were to send an HTTP request here but we only want to do that when the component is
        rendered for the first time and not for every re-render cycle, what would we do then?

        To highlight this problem, let's add a setTimeout call here and add a timeout of one second and
        after one second, the function will execute and I'm just doing this to fake an HTTP request.
        It will throw an alert.

            useEffect(() => {
                console.log('[Cockpit.js] useEffect')
                // HTTP request...
                setTimeout(() => {
                    alert('Saved data to cloud!')
                }, 1000);
            })
        
        The alert will be shown on every activity we will perform on the page like editing a field,
        click on a toggle button, deleting a div and so on. How can I control when this executes? For
        example, this should only execute because it is saving data to the cloud when our persons
        changed but not on any other condition. For that you can add a second argument here to
        useEffect, that second argument is an array where you simply point at all the varirables or all
        the data that actually are used in your effect.

        Right now, React is not smart enough to find out on its own and actually here it couldn't
        because we're not using any data in here but if we know, we only want to run this code when our
        persons changed, well then you simply add props.persons here. Now this effect should only
        execute when our persons changed. So if I reload this, it runs initially and if I toggle my
        persons now, there is no alert because persons didn't change. If we type something, we get it
        again because that changes my persons. If I toggle persons, it does not come again because
        that didn't change my persons.

        What if we now only want to execute this when the component renders the first time?
        For this, there is a little shortcut, you can pass an empty array. This tells React this effect
        has no dependencies and it should rerun whenever one of the dependencies changes. If you have
        no dependencies, they can never change and therefore this can never rerun, it will run for the
        first time, that is the default but it will never run again. So now therefore, we get this
        initially but thereafter we can do whatever we want and this does not come back.

        So, if you just need componentDidMount, you would use useEffect with an empty array passed as a
        second argument to the useEffect function. If you have a dependency on a certain field, you do
        what we did before, you pass that field in here and of course you can add multiple fields
        you will depend on.
    */

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