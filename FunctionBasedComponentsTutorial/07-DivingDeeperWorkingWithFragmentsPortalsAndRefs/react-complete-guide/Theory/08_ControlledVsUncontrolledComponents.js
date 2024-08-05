import React from 'react';

const ControlledVsUncontrolledComponents = () => {
    return (
        <p>
            {/*
                In the last lecture, we learned about refs and I showed you that with refs you have an
                alternative way of getting the UserInput of accessing those input fields. And I also
                showed you a little hacky approach of then still manipulating the input fields and
                resetting them if you want to do that.

                This approach of using refs to interact with DOM elements specifically with input elements
                also has a special name. We're talking about uncontrolled Components if we access values
                with a ref. So these input Components here, would now be uncontrolled Components. Why
                uncontrolled?

                Because there internal state, so the value which is reflected in them is not controlled
                by React. We rely on the default behavior of the input where a user is able to enter
                something and that entered value is reflected. And we then just fetch it, with a React
                feature but we don't feed data back into the input.

                When I set a new value to those inputs here with the work around, we're absolutely not
                using React here. Sure, we're using the ref but in the end we get access to the native
                DOM element with that and I then just use the regular DOM API for setting the value of 
                a DOM node of an input DOM node.

                So that's why this is uncontrolled because we're not controlling these state of the input
                element with React. You can talk about uncontrolled and controlled Components all in the
                context of other Components, but most commonly we have this scenario when we talk about
                input Components about form Components in general because those Components tend to have
                some internal state natively by the browser, an input element is configured to take user
                input and save and reflect it.

                And when we then work with those Components in a React app, we want to connect our React
                state to that. That's why we typically have this controlled and uncontrolled thing when
                we work with input Components in React. And when we use refs, like we're doing we have
                uncontrolled input Components.

                The approach we have before where we manage our state and we updated that state on every
                keystroke and we feed that state back into the input with the value prop, so that
                approach we had before, before we added refs that would be the controlled approach. Then
                we would say that those input fields are controlled Components because their internal
                state is controlled by React.

                These are simply important terms, which you should keep in mind for potential interviews
                or discussions with other React developers because they are typcial terms you hear in
                the React world.
            */}
        </p>
    )
}

export default ControlledVsUncontrolledComponents;