import React from 'react';

const UseEffectSummary = () => {
    return (
        <p>
            {/*
                useEffect besides useState is the most important React hook you have. So you need to
                understand it. Therefore, I again want to make it clear at which point of time, which
                part of useEffect kicks in and executes. To understand let's add a new useEffect call
                in the Login Component where I only add the first argument.

                useEffect(() => {
                    console.log('EFFECT RUNNING');
                })

                In there we can log 'EFFECT RUNNING' and at the moment we have no information about the
                dependencies, we just have the first argument. This is a valid way of using useEffect
                though you will rarely use useEffect like this. The reason for this is if I reload you
                see it runs when the Component first mounts, when the Login Component is rendered for
                the first time, but then also for every state update.

                For example, if I click in the textbox and click out of the textbox, Effect will run. For
                every keystroke we see, EFFECT RUNNING. This now runs for every time this Component
                function reruns because you learned the effect function runs after every Component render
                cycle. Not before it and not during it, but after it. Including the first time the
                Component was mounted.

                This changes once we add an empty array, now the function in useEffect only executes
                for the first time Component was mounted and rendered, but not thereafter, not for any
                subsequent rerender cycle. Now we will not see EFFECT RUNNING for every keystroke but
                only one time. If I Login, we also don't see it again. So it ran only once.

                Alternatively, we add a dependency like enteredEmail or enteredPassword. Now the
                anonymous function inside useEffect reruns whenever the Component was re-evaluated and
                the state of a dependency is changed.

                If we now reloads we see EFFECT RUNNING, for the first time it was mounted, but now for
                the keystrokes in the Email nothing changes. For keystrokes in password, we see EFFECT
                RUNNING though, because the password is a dependency.

                We also have the CleanUp function, which we can return. This CleanUp function runs before
                the state function as a whole runs but not before the first time it runs. In CleanUp
                function we can console.log('EFFECT CLEANUP') and if we reloads we see only EFFECT
                RUNNING here for the first render cycle.

                For Email nothing happens but once I start typing in Password, we see EFFECT CLEANUP
                triggered and it triggers before the effect function runs. If we have an empty array
                with no dependencies, we learned that we only see EFFECT RUNNING once, and the CleanUp
                function in this case, would run when the Component is removed.

                In this case for example, when I Login and the Component is removed from the DOM, we see
                EFFECT CLEANUP. That's how useEffect works, and how the different parts of it are
                related and when they execute.
            */}
        </p>
    )
}

export default UseEffectSummary;