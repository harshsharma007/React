import React from 'react';

const WhatAreSideEffectsAndIntroducingUseEffect = () => {
    return (
        <p>
            {/*
                What is an effect? Also called a side effect. I will use these terms interchangeably.
                So when I say effect, I mean side effect and the other way around. But what is that?

                Let's not forget that our Components in the React App and our React App as a whole and
                also especially the React library itself has one main job to render the UI, to React to
                our user input, to re-render the UI when it's needed. That is what we focused on thus
                far. With state and events, the main job was to bring something onto the screen and to
                make sure that the user may interact with that and what's shown on the screen may change
                based on certain events.

                For example, based on a button click or some text being entered. Therefore that's the
                main job of React and of our application. We want to evaluate and render the JSX code
                and the DOM. We want to manage state and props to make sure that every Component has
                the data it needs and that we reflect the user input correctly.

                We want react to user events as mentioned and of course React is there to also re-evaluate
                our Components and their JSX code and manipulate the real DOM as needed. So that's all
                baked into React with the tools and features we learned thus far and which we will dive
                into throughout this course. Something like useState hook, props and so on.

                That's the main job and if we have a look at a React Component, then we learn that a
                Component is just a function therefore it's executed top to bottom and everything in
                that function in the end deals with bringing something onto the screen and/or reacting
                to user input to clicks and so on.

                We may use state in there, we may have other functions in there, which are triggered
                upon a button press and so on. But everything we have in a Component function is
                concerned with bringing something onto the screen. Therefore, side effects are everything
                else that might be happening in your application.

                A good example here is sending a HTTP Request or storing something in browser storage.
                In local storage for example, but you could also think about timers or intervals which
                you set in your code. These are all tasks which you of course often have to consider
                in your application. For example, a lot of web applications need to send HTTP Requests
                to backend servers but these tasks are all not related to bringing something onto the
                screen.

                At least not directly. You might be sending a HTTP Request to then draw something onto
                the screen once you got the response, but sending the request itself and handling
                potential errors and so on that's not something you need React for, that's not something
                React cares about, that's not what React is.

                Therefore it's not something that is related to drawing something onto the screen
                directly or anything like that. These are tasks which must happen outside of the normal
                Component evaluation. So outside of your normal Component function. Because you must
                not forget that the Component function is re-executed by React automatically whenever
                the state in the Component function changes.

                Whenever the state is changed, the entire function re-runs and React then basically
                checks what is the new result of the function execution. So the new JSX code looks like
                and if compared to the previous result it should go to the real DOM and make some
                changes there. And we'll dive deeper into how exactly React works under the hood in a
                separate section. But this is what you have learned thus far and this is what React does.

                Since this is what's happening, if we would send a HTTP Request directly, then we would
                send the request whenever this function re-runs (whenever the state changes). That
                might sometimes be what you want but definitely not always. And if in response to your
                HTTP Request you eventually change some state, you would even create an infinite loop.

                Because you would send the request whenever the function re-runs. And in response to the
                request you change some state which triggers the function again. So therefore such
                side-effects should not go directly into the Component function because that would most
                likely create bugs, infinite loops or simply send too many HTTP requests.

                Therefore we'll have a better tool for handling side effects and that's a special React
                hook which we can use, the useEffect() hook. The useEffect() hook is simply another
                built-in hook you can run inside of your Component function that will do something
                special.

                useEffect(() => {...}, [dependencies]);

                The useEffect() hook is called with two arguments, the first argument is a function
                that should be executed after every Component evaluation if the specified dependencies
                changed. And the specified dependencies are the second argument that you pass in. That's
                an array full of dependencies and you will see how these dependencies look like.

                So an array full of dependencies and whenever such a dependency changes that first
                function will re-run. And therefore, in the first function you can put any side effect
                code and that code will then only execute when the dependencies specified by you
                changed and not when the Component re-renders.
            */}
        </p>
    )
}

export default WhatAreSideEffectsAndIntroducingUseEffect;