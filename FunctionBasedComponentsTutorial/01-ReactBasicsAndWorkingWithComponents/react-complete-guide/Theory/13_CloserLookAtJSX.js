import { React } from 'react';

const ACloserLookAtJSX = () => {
    return (
        <p>
            {/*
                You can open up your developer tools and there you will find the JavaScript code which
                is responsible for what you're seeing on the page. And in there, you will also find all
                your Component functions, like the App() function. It will look totally different in the
                end because there you have no JSX code, and JSX code isn't supported by the browser.

                JSX is just a syntactic sugar, which works here in Visual Studio code and behind the
                scenes transformations help to work the code in browser too.

                In package.json, we've got a bunch of dependencies, and most of them are dealing with
                behind the scenes transformations. But we've got two dependencies which are related to
                React, react and react-dom. We're using ReactDOM in the index.js file, but we are
                never using React anywhere. We are never importing React anywhere.

                In lot of React projects, you will see React imports even though we don't have them here.
                Because in the past, in older React projects you actually needed to:

                import React from 'react';

                in all your React Component files. To be precise, in all files where you need JSX. We
                can import this import now, is really just some magic being done by modern React project
                setups.

                We needed this import in the past, because this JSX code is just syntactic sugar. And
                under the hood, it has actually transformed to two methods called on this React object,
                whcih is why we needed to import React in the past.

                Let's change the JSX code to without using JSX syntax:

                <div>
                    <h2>Let's get started!</h2>
                    <Expenses items={expenses} />
                </div>

                When you use JSX it called createElement method. createElement takes three arguments.
                The first argument is the element which should be created for example a div. And if it's
                a built-in HTML element you just pass in a string with the name of that element, like
                div.

                The second argument is an object that configures this element. Specifically, an object
                which sets all the attributes of this element (div). The div has no attribute, so here
                we can pass in an empty object.

                The third argument is the content between the opening and closing div tags. And actually
                it's not just a third argument. You can have an infinitely long list of arguments, which
                are the different content pieces between the opening and closing tags.

                So here we have two elements, so we would have two extra arguments. The third argument
                would be our H2 element. We would create H2 element using React.createElement and again
                this H2 element does not have any argument so it would be empty object. And the third
                argument of this createElement call would be the content in this H2 tag, so it's
                Let's get started!

                In case of custom Components, rather than using a string in the first argument we just
                have to use the name of Component so that it should point to that particular Component.

                return React.createElement(
                    'div',
                    {},
                    React.createElement('h2', {}, 'Let\'s get started!'),
                    React.createElement(Expenses, {items: expenses})
                )

                The code above is an alternative to the JSX code using React object. And if we save and
                run the code we would see the same output like before. Moreover, we can write the entire
                React App like the code above but it turns out that this is a bit harder to read and
                a bit more cumbersome than using the JSX code.

                But that's why you needed to import React from react in all your Components files in the
                past, because this is the under-the-hood code, which gets created automatically when
                you use JSX.

                In more modern project setups, you can omit import React from react because the project
                setup is able to make that transformation without the import being added. But if you
                see component functions where this import is there, it is there because in the past, you
                always did need to add it.

                And therefore, because of that reason, I will now also import it and add it to all
                Components where I used some JSX code. Technically, you don't need to do that, but I'm
                doing it to really emphasize that React is still being used under-the-hood here.

                If you have a look at this code, it should also be clear why you need some wrapping
                element as a root JSX element. Why you can't have two elements side-by-side being
                returned. Because how will you write this in the React.createElement world?

                In the end, you would be trying to return the below code:

                return
                    React.createElement('h2', {}, 'Let\'s get started!'),
                    React.createElement(Expenses, {items: expenses})
                
                And that doesn't work. You can't return more than one thing, you could return an array,
                but this is not an array of elements, this is two separate elements side by side.
                That's why you always need such a wrapper, because in the createElement world you always
                create one element, which then may have more child elements. So that's why we have this
                one wrapper root JSX element which we always need.
            */}
        </p>
    )
}

export default ACloserLookAtJSX;