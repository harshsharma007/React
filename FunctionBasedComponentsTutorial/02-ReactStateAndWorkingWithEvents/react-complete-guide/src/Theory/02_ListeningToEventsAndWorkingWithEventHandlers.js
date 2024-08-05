import React from 'react';

const ListeningToEventsAndWorkingWithEventHandlers = () => {
    return (
        <p>
            {/*
                To change our static website because we only have one state in the application. To do so,
                let's dive into how we can react to user events:

                We will start fairly simple. First, we will learn clicks on a button to which you want
                to react. To start with all of that, let's go to the ExpenseItem where we output the
                title, the amount and so on.

                In there I will also add a button before we close the Card. This would be a temporary
                button and we are going to remove it later. My goal here is simple, I want to change
                the title which is being output h2 tag. Initially, the title which is being output is
                the title we get via props.

                But I want to change it whenever this button is clicked and therefore we need to find
                out how exactly we can react to button clicks in React and it's pretty simple. On all
                built-in HTML elements, like divs, h2 and especially all the buttons and so on we have
                full access to all these native DOM events which we can listen to.

                For all the HTML events, there is a prop equivalent in React which we can add to these
                built-in HTML elements to listen to these events. So instead of adding a listener as we
                normally would do it:

                document.getElementById('root').addEventListener()

                which is the imperative way of doing that, in React we add an event listener by going to
                the JSX element, like button and there we add a special prop. But now it's not a prop
                which sets some value for this button, but instead it's a prop which starts with "on".

                Because React exposes all these default events as props which start with "on". For
                example, we can add onClick. What it does is, it adds an event listener for a click
                events to the button. Now we just need to define what happens when such a click occurs.

                We do that by assigning a value to the click event and the value here should be some
                that should be executed when that click occurs. For that we can create a function. So,
                all these event handlers props, want a function as a value. A function passed as a value
                for onClick and all these other on props which then is executed when that event occurs.

                For function creation, we can create an anonymous arrow function like below:

                <button onClick={() => {console.log('Clicked')}}>Change Title</button>

                Typically, we don't want to work with such anonymous inline arrow functions though. By
                the way, it doesn't have to an arrow function, you could also create a function with a
                function keyword.

                <button onClick={function() {console.log('Clicked')}}>Change Title</button>

                But it will mean that you will put a lot of code here into your JSX code block and that's
                generally not a good idea. Instead, you want to define a function before you want to
                return and you could do it either with a function keyword or by creating a const or a
                variable which holds an arrow function.

                After writing a clickHandler() function, we just have to point to that function in the
                onClick of button. Why?

                Because we don't execute it here in onClick handler. You don't add parentheses like below:
                
                <button onClick={clickHandler()}>Change Title</button>

                Instead, you just repeat the name of the function, no matter if you created that function
                like this:

                const clickHandler = () => {
                    console.log('Clicked!!!!');
                }

                Or

                with the function keyword:

                function clickHandler() {
                    console.log('Clicked!!!!);
                }

                This does not matter. No matter how you defined you just point at it. Why?

                Because if you would add parentheses here, JavaScript would execute it when the line of
                code is being parsed. And the button line of code will be parsed when the JSX code is
                returned. So it's then not executing clickHandler when the click occurs but when the
                JSX code is evaluated and that would be too early.

                That's why we just pass a pointer at this function as a value to onClick and React will
                then executes the function whenever the click occurs.

                How to name these functions?
                It is a convention which you don't have to follow but which you might consider following
                that you name your function like clickHandler. If they are triggered upon an event, that
                you end with handler. This is not a must do and not every React developer does it, but
                it is a preference I personally have.

                It will make clear that this is a function which is not called by us, somewhere else in
                our code, but that it is a function which we attached to an event listener so that it's
                eventually called by React when that event occurs.
            */}
        </p>
    )
}

export default ListeningToEventsAndWorkingWithEventHandlers;