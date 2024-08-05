import React from 'react';

const UsingOneStateInstead = () => {
    return (
        <p>
            {/*
                There is an alternative for setting up the state. You can have multiple slices of state
                but you could also argue that all three states are related to one form. Basically, it's
                the same concept repeated three times. Therefore, you could also go for one state.

                By calling useState only once and by passing in an object as a value and that's important
                not a string but an object. And in this object you could group together your three
                states.

                You could have an:
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''

                The logic is same but now it is managed in one piece of state instead of three separate
                slices. The difference now is that when you update a state you need to update all three
                properties and not just one.

                And, when user enters a title, you wouldn't store it like the traditional way like the
                way we were doing in single slice of useState but rather we have to do something like
                below code:

                setUserInput({
                    enteredTitle: event.target.value
                })

                But you also have to ensure that the other two pieces of data don't get lost. If you
                would just set your new user input state to single object, you would basically dump the
                other keys. Because when you update your state React will not merge this with the old
                state. It will simply replace the old state with the new one.

                And if the new one is a object with one key value pair the old state will be replaced
                and therefore the other two key value pairs for amount and data would be lost. To copy
                the existing value of amount and date we have to use the spread operator, which is a
                default JavaScript operator in modern JavaScript. And you copy in ...userInput like this.
                And then you override enteredTitle.

                setUserInput({
                    ...userInput,
                    setEnteredTitle: event.target.value
                })

                Doing like this we ensure that the other values aren't thrown away but are also part of
                that new state. This is an alternate to having three individual state slices. It's up to
                you, what you prefer but I tend to prefer the individual state slices.
            */}
        </p>
    )
}

export default UsingOneStateInstead;