import React from 'react';

const Quiz = () => {
    return (
        <p>
            {/*
                1. How should you NOT listen to events when working with React?
                A. Adding an event listener (e.g. via "addEventListener") manually.

                2. Which value should you pass to event listener props like onClick?
                A. A pointer at the function that should execute when the event occurs.

                3. How can you communicate from one of your Components to a parent (i.e. higher level)
                   Component?
                A. You can accept a function via props and call it from inside the lower-level (child)
                   Component to then trigger some action in the parent Component (which passed the
                   fucntion).

                4. How can you change what a Component displays on the screen?
                A. Create some "state" value (via useState) which you can then change and output in JSX.

                5. Why do you need this extra "state" concept instead of regular JS variables which you
                   change and use?
                A. Because standard JS variables don't cause React Components to be re-evaluated.

                6. Which statement about useState is NOT correct?
                A. Calling useState again will update the state value.

                7. How can you update Component state (created via useState)?
                A. You can call the state updating function which useState also returned.

                8. How much state may you manage in one single Component?
                A. You can have as many states slices as you need/want.

                9. What's wrong with this code snipped?
                   const [counter, setCounter] = useState(1);
                   ...
                   setCounter(counter + 1)
                A. If you update state that depends on the previous state, you should use the "function
                   form" of the state updating function instead.
            */}
        </p>
    )
}

export default Quiz