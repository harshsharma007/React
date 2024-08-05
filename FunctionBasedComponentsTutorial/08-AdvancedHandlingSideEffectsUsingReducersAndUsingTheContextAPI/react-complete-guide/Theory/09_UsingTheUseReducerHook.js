import React from 'react';

const UsingTheUseReducerHook = () => {
    return (
        <p>
            {/*
                useReducer look like this:

                const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

                01. state - The state snapshot used in the Component re-render/re-evaluation cycle.
                02. dispatchFn - A function that can be used to dispatch a new action
                    (i.e. trigger an update of the state).
                03. reducerFn - (prevState, action) => newState
                    A function that is triggered automatically once an action is dispatched 
                    (via dispatchFn()) it receives the latest state snapshot and should return the new, 
                    updated state.
                04. initialState - The initial state.
                05. initFn - A function to set the initial state programmatically.

                useReducer just like useState, always returns an array with exactly two values. And
                therefore you can use array destructuring as we did it with useState to pull out these
                values and store them in separate constants. The two values you are getting are the
                latest state snapshot because it is a state management mechanism like useState.

                But you also get a function that allows you to update that state snapshot. So that's
                kind of the same as for useState though the state updating function will work differently.
                Instead of just setting a new state value, you will dispatch an action. And that action
                will be consumed by the first argument you pass to useReducer a so-called reducer
                function.

                So this is a function which gets the latest state snapshot automatically because this
                function will be called by React and it gets the action that was dispatched. Because
                React will call this Reducer function whenever a new action is dispatched. So then it
                gets the last state snapshot managed by React. And that gets the action that was
                dispatched that triggered this reducer function execution.

                The reducer function then also should do one important thing. It should return a new
                updated state. So it's a bit like the function form of the useState hook, but an
                extended version of that, you could say, because of that action thing, which you'll see
                in action.

                In addition, you can also set some initial state and also an initial function that
                should run to set the initial state in case your initial state is a bit more complex.
                For example, the result of let's say HTTP requests or anything like that. We'll ignore
                that for now. So that's useReducer in theory. Let's see it in action.

                We can use useReducer to combine our entered values and validities for the Email and the
                password. And we could also use it to manage the overall form state with it. So we
                could either manage one big form state that includes everything or in multiple smaller
                states. Both would work but to keep things simple, we will simply start by managing our
                Email state with useReducer.

                There the goal is to combine the value and the validity into one state managed by
                useReducer. First of all, we need to import useReducer and below is the code:

                const [emailState, dispatchEmail] = useReducer()

                As I mentioned that useReducer as a first argument takes a function. Here I could use an
                anonymous function or we actually could also outsource this into a separate named
                function, maybe to make it easier to read. We can create a named function with the name
                emailReducer and we have to create this function outside of the Component function.

                And I did so because inside of the reducer function we won't need any data that's
                generated inside of the Component function. So the reducer function can be created
                outside of the scope of the Component function because it doesn't need to interact with
                anything defined inside of the Component function.

                All the data which will be required and used inside of the reducer function will be
                passed into this function when it's executed by React automatically. So that's why we
                can define it outside of the Component function. So emailReducer function will receive
                two arguments - state and action.

                And in emailReducer function we should return a new state, our state could be an object
                where we have the value, which is initially an empty string and isValid field, which
                is initially false. That could also be our initial state here which is the second
                argument we passed to useReducer value and isValid to false. That's the initial state
                we set for our emailState snapshot.

                The emailState is therefore what we can use in our code. For example, in our
                passwordChangeHandler where I want the enteredEmail also in the validateEmailHandler.
                Instead of validating a state in the handler function like:

                setFormIsValid(
                    emailState.value.includes('@') && event.target.value.trim().length > 6
                )

                We can also check isValid like below because we have isValid field in the useReducer.

                setFormIsValid(
                    emailState.isValid && event.target.value.trim().length > 6
                )

                In the submitHandler we need to forward {emailState.value} and in the JSX code instead
                of emailIsValid we have to use emailState.isValid. With that enteredEmail and
                emailIsValid should now be gray because we are not using them and we can comment them
                out. We have to still work on our reducer because right now it always return false.

                We need to dispatchEmail action, we need to dispatch it in the emailChangeHandler when
                we want to update the value or in the validateEmailHandler when we want to update the
                validity. Let's start with the value, we update the value by calling dispatchEmail and
                we pass to it so called action.

                It's totally up to you what this action is, it can be a string identifier something like
                dispatchEmail('NEW_EMAIL_VALUE') or it can be a number dispatchEmail(23). But often
                it will be an object which has some field that holds some identifer often the field is
                named type and that could be something like:

                dispatchEmail({type: 'USER_INPUT', val: event.target.value})

                It doesn't have to be all caps but it's a convention you see a lot. And then we can also
                add an extra payload to this action. It will trigger emailReducer function to execute
                because that's the reducer function we passed to useReducer.

                In the emailReducer, we can handle the action by checking the type. So in the 
                emailReducer, I am updating both the value and isValid whenever I received as USER_INPUT
                action. And, for any other action that might reach this reducer the default state would
                be returned.

                We also need to dispatch an action in the validateEmailHandler. I can dispatchEmail()
                again, and passing an object, you should be consistent. Your actions should always have
                the same structure so that your code where you try to access a type property does not
                suddenly fail. So once you decided for an action structure, you should stick to it.

                Here the type would be 'INPUT_BLUR' because the input loss focus it was blurred. And we
                don't need to add a val because all we care about here is that the input lost focus.
                There is no extra data that needs to be added. So here we have a simple action, still an
                object, still with a type property but without a value.

                And in the emailReducer we need to append one more condition for 'USER_BLUR' and if it
                is I want to return a new state snapshot for my emailState. But now the value should be
                the value we had before and I'll use my last state snapshot, which I get in the function
                as an argument. And this is guaranteed to be the absolute last state snapshot.

                React gives us this state snapshot and it makes sure that it's the latest one. So we can
                access state.value to access the last value that was entered for the email. And similar
                for the validity.

                That's how useReducer works and it allows us to group the emailState together and manage
                it in one place.
            */}
        </p>
    )
}

export default UsingTheUseReducerHook;