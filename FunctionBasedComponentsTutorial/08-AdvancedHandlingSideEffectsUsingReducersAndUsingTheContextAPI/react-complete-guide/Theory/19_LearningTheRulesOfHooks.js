import React from 'react';

const LearningTheRulesOfHooks = () => {
    return (
        <p>
            {/*
                We knew about useState before, but now we also learned about useEffect, useReducer and
                also useContext. These are bunch of React hooks, there are even more hooks than that
                but we'll get there step-by-step. Now that we have all those hooks it is important that
                we also learn about some rules for using them.

                (Resource is placed in the "Rules of Hooks" folder where you can access it in pdf file).
                
                There are two main rules you have to know when it comes to working with React hooks
                and React hooks are simply all those functions that start with "use". The first rule,
                which is important, is that you must only call React hooks in React functions. That
                means in React Component functions or also allowed in Custom hooks.

                These are the two scenarios where you are allowed to use React Hooks. And what does this
                mean?

                To give you a concrete example, in the Login Component we have the emailReducer function.
                We also have Login function and this function is Component function for the Login
                Component. And it identifies itself as such a function because it returns JSX in the
                end. That is what makes up a Component function.

                EmailReducer does not do that, it returns an object. It's not a React Component and
                therefore calling useState in here is not allowed. The good thing is a modern React setup
                with a good IDE like Visual Studio Code, will even tell you about that. And if we try
                to call useState inside of an emailReducer function we will get an error.

                The second important rule is that you must only call React hooks at the top level of
                your React Component functions or your custom hook functions. Don't call hooks in
                nested functions. Don't call them in any block statements. To give you an example, in
                the Login Component (inside of the functional Component).

                We have our useEffect function and you are not allowed to call useContext or useState
                or any other hook inside of the useEffect function. If you do so you will get a warning.
                React hook useContext cannot be called inside the callback. React hooks must be called
                in a React function Component or a custom React hook function and it needs to be called
                directly on the top level.

                But in a nested function calling useContext is not allowed and that's not just true for
                nested functions, it would also not be allowed in an if statement. Calling useState in
                there is not allowed. So to sum up, only call React hooks at the top level. These are
                the two official rules of hooks.

                There is a third rule, which I want to add here not directly related to all hooks, but
                to one specific hook and that's the useEffect hook. There make sure that you always
                add everything you refer to, inside of useEffect as a dependency unless there is a good
                reason not to do that.

                To make it clear, let's again go to Login Component and in it we use useEffect to execute
                the function and in there we use nothing from the surrounding Component. We use
                console.log but that's baked into the browser. I'm not talking about browser API things.
                I'm talking about data exposed by the surrounding function and here we're not using any
                data, hence we have no dependencies.

                It's a different from the useEffect which is mentioned below, there we have a function
                and in there we are using setTimeout, which is a browser API. We don't need to add it,
                but we're using emailIsValid and passwordIsValid and that's the data from the
                surrounding Component. That's part of the surrounding Components state.

                And if it would be part of the surrounding Components props, the same would be true.
                Such dependencies or such values need to be added as dependencies. Technically, we should
                therefore also add setFormIsValid because that's not the browser API but this is one
                exception to the rule.

                The state updating functions exposed by the useReducer or by useState are guaranteed
                by React to never change. Therefore, you don't need to add them as dependencies because
                if they never change it's a redundant dependency. You could add it though wouldn't be
                wrong and it would work in the same way. You are just allowed to omit it.

                If you didn't mention the required dependency you would get a warning that specifies ->
                React hook useEffect has a missing dependency 'passwordIsValid'. Either include it or
                remove the dependency array.

                (CHECK THE WORD DOCUMENT. SECTION -> LEARNING THE RULES OF HOOKS)
            */}
        </p>
    )
}

export default LearningTheRulesOfHooks;