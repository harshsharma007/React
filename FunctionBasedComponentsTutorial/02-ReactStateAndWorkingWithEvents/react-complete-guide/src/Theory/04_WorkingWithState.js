import React from 'react';

const WorkingWithState = () => {
    return (
        <p>
            {/*
                State is not a React specific concept but it is a key concept in React as well. In
                ExpenseItem, we have a scenario where we wanna use that built-in state concept. Because
                the title changes when the clickHandler executes is actually data that should result
                in the Component being re-evaluated and re-drawn on the screen when it is changed. And,
                by default regular variables are not triggering such a re-evaluation. React doesn't
                care about that.

                If you have a variable in your Component function and that variable changes, React
                ignores it. It doesn't care about that, that code executes but the overall component
                function doesn't execute again just because some variable changed.

                As a side note, even if it would execute again, of course then title variable, would also
                just be retreated and re-initialized to the props value. Because as part of this
                Component function we are creating this title variable. So even if that would happen
                we wouldn't react the desired result but we don't even need to think about that because
                it is not happening.

                The ExpenseItem Component does not currently is not called a second time after the
                initial rendering. Just because a click occured or because a variable changed does not
                trigger this Component function to run again.

                To tell React that it should run again, we need to import something from React library.
                And we do that by adding so-called named import. If we want to extract something
                specific from React we have to use named import and below is the syntax for it:

                import React, { useState } from 'react';

                We need to import useState function from React. This is a function provided by the React
                library and this function allows us to define values as state where changes to these
                values should reflect in the Component function being called again, which is the key
                difference to the regular variable we're using here.

                How to use useState function though?
                Inside of our Component function and that's important we have to do that inside of the
                function. We have to call useState() and useState() is so-called React hook. There are
                other hooks as well, but useState() is one of the most important ones.

                All these React hooks can be recognized by the fact that they start with the word "use"
                in their name, and all these hooks must only be called inside of React Component
                functions like ExpenseItem. They can't be called outside of these function and they also
                shouldn't be called in any nested functions. They must be called directly inside such
                Component functions.

                useState() wants a default state value, because with useState() we basically create a
                special kind of variable, a variable where changes will lead the Component function to
                be called again. And, we can assign an initial value for that special variable, just as
                we are assigning a value to the title variable.

                In useState() my initial value is props.title and we simply pass this as an argument to
                useState. To be able to use useState() it returns something, it gives us access to the
                special variable.

                However, it does not return that, it also returns a function which we can then call to
                assign a new value to that variable. So we'll not be assigning values with the equal
                sign:

                title = 'updated'

                Instead, we will be assigning new values by calling a function. That's how the state
                variable works. And for that useState returns an array where the first value is the
                variable itself, and the second element in the array is that updating function. And, we
                can use a modern JavaScript feature called array destructing, to store both elements in
                separate variables or constants.

                const [title, setTitle] = useState(props.title);

                The first element is the pointer at the managed value, so initially at props.title. And,
                the second element is a function which we can later call to set a new title. Both names
                are up to you but the convention is to use something which describes the value as a
                name for the first element, since that is the value and then "set" and then that name
                repeated.

                useState() hook always returns an array with exactly two elements it's always the case
                and it is also the case that the first element is the current state value and the
                second element is a function for updating that.

                To update the state, we have to define a new value by calling setTitle. By calling the
                state updating function and then we just pass a new value as a argument.

                Why do we have this state updating function instead of assigning a new value in a
                variable?
                The reason is that calling for setTitle() does not just assign a new value to some
                variable, but that instead it is a special variable to begin with. It's managed by React
                somewhere in memory and when we call this state updating function, this special
                variable will not just receive a new value but (it's important) the Component function
                in which you called the state updating function will be executed again.

                And that is exactly what we needed, we want to call this Component function again when
                our state changes and by calling this state updating function that happening. Because
                by calling this function, you're telling React that you wanna assign a new value to this
                state and that then also tells React that the Component in which this state was
                registered with useState() should be re-evaluated.

                Therefore, React will go ahead and execute this Component function again, and therefore
                also evaluate the JSX code again. And then it will draw any changes which it detects
                compared to the last time it evaluated this onto the screen.

                const clickHandler = () => {
                    setTitle('Updated!!!!');
                    console.log(title);
                }

                After saving the changes and clicking the button the UI will be updated. But if you notice
                console logs still show the title before it was updated. The reason for this is that
                calling the state updating function actually doesn't change the value right away, but
                instead schedules the state update.

                In the very next line, the new value isn't avaiable yet. That's why we see the old value
                being logged even though we updated it before logging.

                If you have data, which might change and where changes to that data should be reflected
                on the user interface then you need state because regular variables will not do the
                trick with state, however you can set and change values and when they do change, React
                will re-evaluate the Component in which the state was registered. And only that
                Component not any other Components.
            */}
        </p>
    )
}

export default WorkingWithState;