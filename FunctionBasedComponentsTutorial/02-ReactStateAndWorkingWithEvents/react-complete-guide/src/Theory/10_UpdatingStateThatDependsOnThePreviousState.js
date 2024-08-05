import React from 'react';

const UpdatingStateThatDependsOnThePreviousState = () => {
    return (
        <p>
            {/*
                The way we are updating our state is not entirely correct.

                setUserInput({
                    ...userInput,
                    setEnteredTitle: event.target.value
                })

                It technically would work but in niche cases it could fail, and it's simply not a good
                practice to update it like this. What's the problem here?

                Here, I'm depending on my previous state for udpating the state. In this case, we depend
                on the previous state because we used this one state instead of three states approach
                and we need to copy in the other values so that we don't lose them.

                Hence we depend on the previous state snapshot to copy in the existing values and then
                just override one value with a new one. Whenever and that's a key rule which you should
                memorize, whenever you update state and you depend on the previous state, but also
                if you would be managing a counter which you increment by one, you should not do it like
                this but you should use an alternative form of this state updating function.

                Instead of calling like this, we should call it and pass in a function to that function
                an anonymous arrow function and this arrow function will automatically be executed by
                React. And it will receive the previous state snapshot for that state you're calling
                the update function and inside the function we should return the new state snapshot.

                That should be our object, where I copy in the key value pairs from the previous state
                with the spread operator but we then also override the enteredTitle with
                event.target.value.

                setUserInput((prevState) => {
                    return { ...prevState, enteredTitle: event.target.value }
                })

                Why should we do it like this instead of like we were doing earlier?
                In many cases, both will work fine but keep in mind that I mentioned that React schedules
                state updates, it doesn't perform them instantly. And therefore, theoretically if you
                schedule a lot of state udpates at the same time, you could be depending on an outdated
                or incorrect state snapshot if you the previous approach.

                If you the later approach, React will guarantee that the state snapshot it gives you here
                in the inner function will always be the latest state snapshot keeping all scheduled
                state updates in mind. So this is the safer way to ensure that you always operate on the
                latest state snapshot. So you should use this later approach whenever your state update
                depends on the previous state.
            */}
        </p>
    )
}

export default UpdatingStateThatDependsOnThePreviousState;