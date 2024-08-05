import React from 'react';

const WorkingWithMultipleStates = () => {
    return (
        <p>
            {/*
                The question now is what do we want to do with the value (event.target.value)?
                We can store it somewhere so that when later when the form is submitted, we can use
                that value. Because, we want to gather all the values for all the inputs and then combine
                them into an object when the overall form is submitted.

                And one way of storing that value and making sure that it survives, even it that
                function would be re-executed for whatever reason and the Component would be
                re-evaluated, we can useState.

                At the beginning of the ExpenseForm call the useState() and set the state for the input
                fields. Initially, it would be an empty string because initially when this Component
                is rendered for the first time, nothing was entered. But then we can again, use
                destructuring to get our two elements, which is the currently enteredTitle and the
                function for updating the state, which following the convention should be named
                setEnteredTitle.

                And, when we react to this event where the user enters something, we can just call
                setEnteredTitle and pass event.target.value. So the currently entered value as a
                parameter, to setEnteredTitle. Therefore, this will be stored in our state.

                Now, here I'm not really doing it to update this Component though the Component will
                update. That will always happen when you update the state but I'm doing it to ensure
                that we're storing this in some variable, which is kind of detached from the life cycle
                of this Component function.

                So no matter how often this Component function might execute again, this state is stored
                and survives. There would be other ways of solving this as well but that works just fine.
                And it has another advantage because we'll need that state for updating and for
                re-rendering that Component later anyways.

                How can you manage more than one state?
                You can call useState() more than once.

                We are passing string in useState('') and not a number here for the amount. Because by
                default, whenever you listen to the change event for an input, if you read the value
                of that input element it'll always be a string. Even if it stores the number it will be
                a number as a string and the same for the date.

                
            */}
        </p>
    )
}

export default WorkingWithMultipleStates;