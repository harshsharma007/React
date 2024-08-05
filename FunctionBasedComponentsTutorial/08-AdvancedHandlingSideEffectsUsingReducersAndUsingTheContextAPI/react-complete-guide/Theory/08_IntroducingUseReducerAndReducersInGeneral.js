import React from 'react';

const IntroducingUseReducerAndReducersInGeneral = () => {
    return (
        <p>
            {/*
                useReducer is another built-in Hook and it will help us with the state management. So
                it's bit like useState but actually with more capabilities and especially useful for
                more complex state. Because sometimes you have more complex state, for example, multiple
                states that belong together that are managing the same thing just different aspects of
                it.

                Or you have multiple states that change together or are related. In such cases, useState
                and the state you get from there often becomes hard or error-prone to use and manage.
                And it's easy then to write bad or inefficient or potentially buggy code. useReducer
                is then an alternative to useState.

                So it's replacement if you need a more powerful state management. This does not mean
                that you should always use useReducer because it's more powerful so it's always better.
                Right?

                No, because it's also a bit more complex to use, it requires a bit more setup. So for a
                lot of scenarios you probably use useState. But there are cases where the extra work
                of getting useReducer to work, is just worth it. What would be a concrete example?

                In Login.js file, we are managing a couple of states and you might be able to spot some
                related states. We managed the enteredEmail and the enteredPassword but then we also
                managed emailIsValid and passwordIsValid. And we also managed the overall form validity
                through formIsValid.

                So you could argue overall this is one big state that describes the overall form state.
                The inputs are part of that or you at least treat every input as one entity and one
                state, which simply has two aspects. The value the user entered and the validity of that
                input. And it becomes clear that we have some work to do and some redundancy if we
                consider the fact that we're setting the overall form validity, by checking the validity
                of email and password when we're doing the exact same thing in validateEmailHandler and
                validatePasswordHandler.

                We could rewrite this in various ways for example, use our emailIsValid and
                passwordIsValid states in the useEffect and just use those two states to confirm whether
                the overall form is valid and that would work. But nonetheless, we at least have these
                two states (enteredEmail and emailIsValid) that clearly belong together and which we
                want to manage together.

                If we just comment the useEffect and in the emailChangeHandler and the
                passwordChangeHandler we checked the other entered value and we derived the form validity
                from that. This approach also worked but we had some code re-usage, which is why the
                effect was the better result. But let's say you don't want to use useEffect.

                In that case you have another problem in some apps and in some use cases. setFormIsValid
                is updating some state based on two other states. Now, what did you learn about updating
                the state based on some older state? You want to use the function form, right?

                This does not work here however, because that's only true if your next state update,
                depends on the previous state snapshot of the same state. But here we depend on two
                other states snapshots of different state of the enteredEmail and the enteredPassword.
                Not on the last state snapshot of the form validity.

                Here we are doing something which you normally shouldn't do. Because of the way React
                schedules state updates, the code in setFormIsValid could actually in rare cases, but
                it could actually lead to the scenario where the code in setFormIsValid runs before
                the password state update was processed.

                So enteredPassword when setFormIsValid runs, might not contain the latest entered
                password, because of how React schedules state updates. This is the another scenario
                where you could use useReducer. It's a good use case, a good replacement of useState.
                When you have states that belong together or if you have state udpates that depend on
                other state.

                We violate the rule of using the function form if a state update depends on an older
                state. In our validateEmailHandler and validatePasswordHandler, there we are calling
                setEmailIsValid and setPasswordIsValid to set new states for the emailIsValid and the
                passwordIsValid state. How are we setting these states?

                By having a look at another state and calling a method on it (includes('@')). We're
                having a check at the enteredEmail state which is a different state from emailIsValid
                state. Sure they are related, they both changed because of what the user entered but
                technically these are two different states.

                And we are deriving our setEmailIsValid state by checking at another state and that is
                something we should not do. It works in most cases, but in some scenarios it could not
                work because maybe some state update for enteredEmail wasn't processed in time. And
                then we would try to update setEmailIsValid bases on some outdated enteredEmail state.

                So we should use the function form here, but again, just as with a setFormIsValid we
                can't, because with the function form of our state updating function. We only get the
                latest state for that state which we're setting in setEmailIsValid. So we would get the
                latest setEmailIsValid state not the latest enteredEmail state if we use the function
                form here.

                That's why this is not an option. Therefore we are already violating the rule which I
                told you to not violate. That is a scenario where useReducer is always a good choice.
                If you update a state, which depends on another state then merging this into one state
                could be a good idea. And you can do that without useReducer as well.

                You could simply manage with useState but in such cases when your state becomes more
                complex, bigger and combines multiple related states useReducer can also be worth a
                closer look.
            */}
        </p>
    )
}

export default IntroducingUseReducerAndReducersInGeneral;