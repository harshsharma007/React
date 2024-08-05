import React from 'react';

const UseReducerVsUseStateForStateManagement = () => {
    return (
        <p>
            {/*
                Now that we have learned about useReducer let me again sum up when you should use useState
                and when it might be an idea to use useReducer. Generally, you'll know when you need
                useReducer. That might not be the greatest rule of all times, but you will see when you
                need useReducer for example because using useState becomes too cumbersome, you find
                yourself dealing with a lot of related state snapshots, which are independent and you
                start updating them together in a way that just doesn't work out.

                Then, you want to consider using useReducer. To still give you couple of ideas when to
                use useState versus useReducer:

                - useState is the main state management "tool". Typcially, you start with useState and
                often it's all you need.

                - It's great for independent pieces of state and data.

                - It's great if state updates are easy and limited to a few kinds of updates. If you
                don't have a lot of different cases that will change a state and especially if you don't
                have, an object as a state or anything like that.

                - If you do have an object as a state or a more complex state useReducer might be
                interesting because, in general, useReducer is great if you need more power and with
                more power, I simply mean that you can write such a reducer function that can contain
                more complex state updating logic where you always are guaranteed to work with the latest
                state snapshot. And where you can move that potentially more complex logic out of your
                Component function body into a separate reducer function.

                - You should especially consider useReducer, if you're dealing with related data with
                state that is made up of related pieces of state. For example, when you have a scenario
                as we had it with our form input state.

                - And, in general, useReducer can be helpful if you have more complex state updates, if
                you have different cases, different actions that can change a state, cases like this.

                +-------------------------------------+-------------------------------------+
                |               useState()            |                 useReducer()        |
                +-------------------------------------+-------------------------------------+
                | The main state management "tool".   | Great if you need "more power".     |
                +-------------------------------------+-------------------------------------+
                | It's great for independent pieces   | Should be considered if you related |
                | of state and data.                  | pieces of state/data.               |
                +-------------------------------------+-------------------------------------+
                | Great if state updates are easy and | Can be helpful if you have more     |
                | limited to a few kinds of updates.  | complex state updates.              |
                +-------------------------------------+-------------------------------------+

                There is no hard rule and there, as always in programming, is no clear wrong or right.
                You can certainly also handle cases where useReducer would be good with just useState,
                especially when combining that with useEffect. But sometimes using useReducer just
                might be more elegant or simpler.

                On the other hand, you should absolutely not always useReducer because often that will
                be overkill. If you have just a simple state that just switches between two different
                values using useReducer might be overkill.
            */}
        </p>
    )
}

export default UseReducerVsUseStateForStateManagement;