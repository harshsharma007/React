import React from 'react'

const CleaningUpWithLifeCycleHooksUseEffects = () => {
    return (
        <p>
            {/*
                useEffect is pretty nice, what about cleanup work?
                To start with class based components, the Persons.js component is a component which will
                get removed from the DOM when we click "Toggle Persons". Now, let's say in that case
                you want to do some cleanup work, in that case you want to cleanup some event listeners
                you set up somewhere. In an App, where you do have a live connection to some server,
                it's a very realistic scenario that you do have to cleanup some stuff.

                In a class based component, you can add componentWillUnmount. After saving it, toggle
                it two times to see - "componentWillUnmount". In componentWillUnmount, you could have
                any code that needs to run right before the component is removed.

                If you are using hooks, like we're using in Cockpit.js file, then you can use useEffect
                for this cleanup work. How does that work?

                Well in your function you pass to your effect, so in the anonymous arrow function, you
                can return either nothing (in this case you don't to have a return statement) but if
                you add a return statement, you can add a return function (anonymous function) that will
                run after every render cycle. (TO BE MORE PRECISE, IT RUNS BEFORE THE MAIN USEEFFECT
                    FUNCTION RUNS, BUT AFTER THE (FIRST) RENDER CYCLE).
                
                If you run the code, you never see that cleanup work thing because the Cockpit component
                is actually never removed. Now to demonstrate how to get rid of it, let's go to the
                App.js file and let's add a new button here "Remove Cockpit", so that we can get rid of
                it and in there simply set some state "showCockpit" to true initially. And on the button
                add onClick listener and add an inline event handler, an anonymous function that gets
                executed when the click occurs and there call this.setState({ showCockpit: false })

                After that just wrap the calling of Cockpit component in a ternary operator. The result
                of this is that we start with a Cockpit but we have that "Remove Cockpit" button. If we
                click the button, we will see cleanup work in useEffect, which is coming from React Hook.
                Because that runs right when useEffect runs for the last time. When is this case 
                (last time) depends on the second argument you pass to useEffect. If you pass an empty
                array, useEffect will execute the main anonymous function only when that component
                rendered and when it is unmounted.

                Let us add another useEffect call below for the 2nd useEffect and I will re-copy that
                return statement here. Moreover, this 2nd useEffect will not have second argument, so
                we are not controlling when this should run and therefore it will run for every update
                cycle. when we run the code and see the output, we will see we have the 2nd useEffect
                and when we just toggle Persons, (we're not doing anything with the Cockpit), we got
                Cockpit 2nd useEffect but before that we have the cleanup work in the 2nd useEffect.

                This can also be useful in case you have some operation which actually should be canceled
                whenever the component re-renders, after it updated so to say. This is an extra bit of
                flexibility, that we have cleanup function here and you can either let the first useEffect
                run when the component gets destroyed by passing an empty array as a second argument or
                it runs on every update cycle with no argument or you pass a second argument which is
                an array that lists all the data this should watch and only when that data changes, it'll
                run the function in useEffect and it will then run the cleanup function too.

                Interesting Example:
                We do have our app here and when it reloads, it gives us the alert. Even if I remove
                the Cockpit the alert still shows. How can we remove the timer when the component
                unmounts, we have an empty array which ensures that the return block code executes only
                when a component is mounted and rendered for the first time and when it then is
                unmounted.

                Let's store our timer here in a constant, and clear the timeout when we unmount.

                useEffect(() => {
                    console.log('[Cockpit.js] useEffect')

                    // Change for example
                    const timer = setTimeout(() => {
                        alert('Saved data to cloud!')
                    }, 1000);

                    return () => {
                        clearTimeout(timer)
                        console.log('[Cockpit.js] cleanup work in useEffect')
                    }
                }, [props.persons])

                With that if we save this and the app reloads, we never see the alert because the timer
                never goes off because I clean it up when this Cockpit is unmounted and if I do that
                before the alert shows then it's simply cancelled and if I don't do that then we see the
                alert.
            */}
        </p>
    )
}

export default CleaningUpWithLifeCycleHooksUseEffects