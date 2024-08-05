import React from 'react';

const SettingCSSClassesDynamically = () => {
    return (
        <p>
            {/*
                Which alternative could we have to setting inline styles? What if we could add a new CSS
                class to the div, which holds both the label and the input and we would add this class
                dynamically only if the value entered is invalid. We can create an invalid class and
                this invalid class should sometimes be added on the div.

                In the CSS we could prepare the fitting styles. For example, if the form-control has
                invalid class (code below) and there should be no space between them, which means they
                both have to be on the same element then we could target our input and set the
                borderColor to red and other properties as well.

                .form-control.invalid input {
                    border-color: red;
                    background: #ffd7d7;
                }

                And to target the label we have to follow the similar approach:

                .form-control.invalid label {
                    color: red;
                }

                These would be the two CSS rules that should lead to the desired output. All we need to
                do for these rules to have an effect is we need to add that invalid class dynamically.
                Here's how you can add class dynamically (before that get rid of the inline styles).
                Since we need dynamic values, we need curly braces because a string is always string.

                But inside of curly braces, we cannot feed a string but a string where we dynamically
                add more text in it, where we dynamically expand it or concatenate a value to have the
                invalid string. So what we pass to className on the div would sometimes looks like this:
                
                'form-control'

                or like this;

                'form-control invalid'

                depending on what the user entered and depending on our isValid state. For that, we can
                use a nice construct, we can use backticks here. In case if you are not familiar with
                this, this is a default JavaScript feature and it's called a template literal. This
                contructs a string but we have backticks here not single quotes.

                And, whatever you type between them will be treated as a regular string. So we can add
                `form-control` but the tricky thing is you can also inject a dynamic value into that
                string with a special syntax, which looks like this:

                <div className={`form-control ${!isValid ? 'invalid' : ''}`}></div>

                ${} this adds content into the string and what you pass between these curly braces can
                be any JavaScript expression. So a lot like our curly braces inside of JSX and inside it
                we can check ${!isValid ? 'invalid' : ''}.

                That will make sure that className is either set to a string which has only form-control
                or to a string which is form-control invalid. After saving this and running the project
                we get the exact same behavior as before.

                We could repeat the same technique to add more dynamically added classes and that's
                very powerful because now you're back to working with CSS files and with classes only
                and you can dynamically add or remove classes with this syntax only. And it will be
                React's job to actually add or remove the classes in the DOM.

                You do what you do best in React, you specify a goal, you specify some alternative states
                for example the goal sometimes is to have just form-control and sometimes form-control
                and invalid and React will make sure that the real DOM, is updated accordingly.
            */}
        </p>
    )
}

export default SettingCSSClassesDynamically;