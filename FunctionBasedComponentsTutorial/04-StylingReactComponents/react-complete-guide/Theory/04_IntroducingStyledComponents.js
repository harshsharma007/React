import React from 'react';

const IntroducingStyledComponents = () => {
    return (
        <p>
            {/*
                Being able to set styles and classes dynamically is super important. And you now learned
                how you can achieve this in React code. Now let's move on to something else and that
                would be the styling itself. Currently, we're just using CSS for that regular CSS files
                with regular selectors, mostly class selectors but also sometimes combined with tag
                selectors for example.

                We're importing these files into our Component files, but as I emphasized multiple times,
                this does not result in those styles being scoped to this Component only. So that means
                that if we had any other element anywhere else in a DOM that had a form-controlled CSS
                class on it, the style in CourseInput.css would target it and would affect it.

                So it's not like we only care about foreign control elements in the Component, No, every
                element on the entire page is affected because by default, those styles are not scoped.
                That is not necessarily a problem, you can of course be careful about your selectors.
                You can use class selectors or ID selectors, as it is a regular CSS after all, you can
                use any selector and you can ensure that the IDs and the classes you're selecting are
                only used in the places where you want to apply the styling.

                But in larger projects, potentially with a lot of developers working on the code, it
                could happen that a name is used twice. For example, form-control is used in different
                parts of the application and therefore unfortunately styles spill over to our Components
                and you might want to avoid this.

                There are various ways of avoiding this and I will show you the two most popular
                approaches therefore.

                Approach 1: is to use a package called Styled Components. Styled Components is a package
                that helps you build Components which have certain styles attached to them where the
                styles really only affect the Components to which they were attached and not any other
                Components.

                To get started, we need to install that package and the command to install that package
                is:

                npm install --save styled-components

                If you've never installed packages before, keep in mind that our project (package.json)
                already has a couple of packages on which it depends. For example, react and we're just
                adding one more package here.

                After running the command, it will download the package and will store it in a
                node_modules folder and thereafter you'll be able to use it in the project. How to use
                this package?

                Let's say we want to style our button. We have a button Component and we really only
                created this button Component because we wanted to have some default styling for a button.
                Nothing wrong with this approach but here we could also use the Styled Components
                package to achieve this in a bit of an easier way. How to do it?

                We could rebuild our button by creating a new const Button and now in there we won't
                store a functional Component but instead we not import styled from 'styled-components'.
                And then we have to define our button something like the below code:

                const Button = styled.button``

                This syntax is known as a Tagged Template Literal and it's a default JavaScript feature
                and it's not specific to this package and not specific to React you could use it in any
                JavaScript project. And what does this do?

                Well, button is simply a method on this styled object. Styled is an object we're
                importing from styled-components and there we can access the button method. It's just a
                special kind of method you could say. Instead of being a method, which you call with
                parenthesis you add these backticks after it.

                In the end this will be executed as a method behind the scenes and what you pass in here
                will be passed into this method just in a special way. What we pass between these two
                backticks will end up in that button method. And this button method will return a new
                button Component. Actually that styled package has methods for all HTML elements.

                It has a p method for a paragraph, h1, h2 and so on. The above expression will return a
                button but a button with the styles we provide between these two backticks. The cool
                thing about the back tick syntax is, that you can write a multiline string. We can copy
                all the button styles from Button.css file and add them in backticks.

                What do we need to do to make this work in the end?

                Syntax will return a button and this button won't have a class of button because we have
                no place where we would set up this class name. So instead, the styles we pass between
                the opening and closing of back tick will directly effect this button. Therefore, you
                should get rid of any selectors like .button { }.

                Instead paste in your styles just like that:

                    font: inherit;
                    padding: 0.5rem 1.5rem;
                    border: 1px solid #8b005d;
                    color: white;
                    background: #8b005d;
                    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
                    cursor: pointer;
                
                And they will be added to the button element which is returned by the method call which
                is then stored into the Button const variable. For pseudo selectors, you can use the
                ampersand symbol that's supported by the Styled Component package. This tells the package
                that you want to have a special pseudo selector in this case for this Component, which
                is created here.

                In this case, when the button has a focus please apply to style. We can do same for hover
                and for active.

                This should now give us a button which has these styles. The button which is returned
                also by default applies all the props you might be passing to your own Button Component
                which we are exporting in the end. So we can still add onClick prop, we can still set
                the type that will all be forwarded by the Styled Components package to the core built-in
                button, which we previously wrapped or used ourselves which is now used internally by
                the button method.

                We can also get rid of the import React statement because we're not dealing with JSX
                in this file anymore. And if we save and run our application, we should see that our
                application looks and works exactly as it did before. So this still works, but this is
                now our styled button.

                But, if we inspect our Button in the developer tools, though it would be a regular button
                but it have two very strange classes and these are the class names we certainly didn't
                set up. These are the class names that are dynamically generated by the Styled Components
                package.

                Because what this package does in the end is it looks at the styles we set up and then
                it wraps these styles into generated class names where it guarantees that every class
                name is unique so that it can't spill over to other Components of the app. And it will
                then add these classes as global CSS.

                Since now we have unique class names for every Styled Component, the style set up here
                will never be able to affect the another Component in the app because these unique class
                names are really unique per style Component.
            */}
        </p>
    )
}

export default IntroducingStyledComponents;