import React from 'react';

const UsingTheReactDevTools = () => {
    return (
        <p>
            {/*
                We have a look at error messages, that we shouldn't panic when we read them, we had a
                look at other approaches we can take to find and fix errors. And we have a look at the
                browser developer tools. Let's have a look at a dedicated tool, which is available for
                the React development and which can help us with React specific problems and which can
                help us with understanding our React Application better.

                That would be the React DevTools. In your browser dev tools you will see two new tabs,
                Components and Profiler. We'll have a look at the profiler later in the course. For now,
                let's focus on Components. If you click on it, you will see a little Component tree
                on the right and that is what we're building with React.

                We're building a tree of Components. So it makes sense that we see that and what's
                interesting here is that here we only see React Components. In the browser, we got the
                elements tab and there we see the entire DOM as it was rendered by the browser. In the
                end, that's just a DOM that is implied by our Components.

                So that can also be useful for debugging our DOM and our UI. But the difference to the
                Components tab is that in the Components tab we see the actual React Components and
                the Components structure that is responsible for this UI output. For example, we have
                the root App Component with the CourseInput Component which has the Button Component.

                With the CourseGoalList Component with the different CourseGoalItems. We can also click
                on those Components to get more information about them. For example, if we scroll down
                for the CourseGoalItem we actually see a list of props that it's getting. That includes
                the children prop, so the content passed between the opening and closing tag, the ID prop, 
                the onDelete prop.

                For the onDelete prop we see that the deleteItemHandler() function is passed as a value.
                For children, we see that it's the text of the task. And if we scroll down further, we
                see which Components were responsible for rendering this. And these Components are
                ordered depending on how close they are.

                The top most Component here is the Component which directly rendered CourseGoalItem and
                the further down we go here, the further away that Component is in the main Component
                tree. Indeed CourseGoalList Component did render the two CourseGoalItems but of course
                CourseGoalList then was rendered by App.

                We also see the source code, where we can find information about the CourseGoalItem. And
                if we click on CourseGoalList, we're taken to that Component. We can also search for
                Component in the search bar. What you also see is that if you go to the CourseInput, you
                don't just see the props there but you also see the hooks that are being used here.

                And you will see that in there we're using two State Hooks. Remember, I mentioned that
                useState, which we use to manage state is a so-called React Hook. This hook is responsible
                for managing that state of CourseInput and we can see and can change the current state.

                For example, if I enter "Master React" in the textbox that will be reflected in the hooks
                section and will update the State. But if we enter an exclamation mark in the state it
                will not be reflected in the input because we're not feeding the current value back
                into the input. We could do that by setting the value prop, but we're not doing that here.

                Nonetheless, if I now add the goal you see that the exclamation mark is part of the text
                that was added in the hooks section. So we can change the state here and it really will
                have an effect on the UI.

                On the App Component, we see our array of Goals and if I change one of the goals here
                that will be reflected on the left as well. So that a great tool to play around with
                your state, props and for understanding how everything is connected and for trying out
                different use cases, in different scenarios.
            */}
        </p>
    )
}

export default UsingTheReactDevTools;