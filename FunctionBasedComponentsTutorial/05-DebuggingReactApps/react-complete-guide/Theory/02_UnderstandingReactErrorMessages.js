import React from 'react';

const UnderstandingReactErrorMessages = () => {
    return (
        <p>
            {/*
                Let's start with error messages. This project is slightly an altered version of the
                project we worked on over the last modules. In this project, I have added a couple of
                errors, and therefore if you run

                npm start

                You will immediately get an error in your terminal. If you visit the application in the
                browser you will also get the same error output there, instead of the application. It
                failed to compile and that's why we can't see the application. And the problem we have is
                a parsing error.

                Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment?

                Adjacent, which means side-by-side JSX elements must be wrapped in an enclosing tag.
                And we also get a hint at the file and the line of code this error is stemming from. We
                even see the code snippet below the message. We see that it comes from App.js and there
                line 43:7.

                If we go to the App.js file, we see line 43 and even IDE will detect this error. As a
                side note, this is an error my IDE is able to detect, it won't detect all React errors
                though. So sometimes you get an error which is not showing up in your IDE. So what is
                wrong here?

                Well, there seems to be a rule in React that forces us to basically wrap neighboring
                side-by-side elements in one surrounding element. And here the problem is that we have
                a section, next to a section. And such adjacent JSX element, which you return are not
                allowed. Instead, you need to wrap them in one root element.

                In there you can have side-by-side elements but whenever you return JSX you must only
                have one root element in there, which then can wrap adjacent elements. That is a hard
                rule you have in React and as a side note, we have that rule because behind the scenes
                this is React.createElement code and you can't have two statements side-by-side being
                returned by one return statement.

                And that is what two adjacent sections would be translated to. But this is an error we
                are able to fix, even without fully understanding where it's coming from. Because the
                error message clearly tells us, that we need an enclosing tag. And as soon as I do add
                such a tag, for example, "a div" I'm able to save this and it now compiled successfully.

                That is an example of a React Error Message, which we just had to read and we were able
                to solve it. Other common mistakes that are often made are incorrect names of functions
                you're pointing at. Let's say we are pointing at {addGoalHandler} function and we could
                make a call to {addGoalsHandler} function (a simple typo).

                My IDE will detect it and it gives me a clear indicator that something is wrong here.
            */}
        </p>
    )
}

export default UnderstandingReactErrorMessages;