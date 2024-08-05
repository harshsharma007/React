import React from 'react';

const UsingTheUseEffectCleanUpFunction = () => {
    return (
        <p>
            {/*
                There is one last important thing you need to know about useEffect or about the built-in
                features of useEffect. Sometimes, you also have an effect that needs to do some cleanup
                work. That sounds very abstract, so let me give you a more concrete example. Let's
                say setFormIsValid function in useEffect, we're executing this function essentially on
                every keystroke.

                If we write console.log('Checking form validity') you will see, with every keystroke
                the console is logged with Checking form validity. That's not a problem because this
                function execution is fairly fast. But you do in this function that, might be a problem.
                In this function, we are updating some state this might already not be ideal.

                For this simple state update it won't be a problem but of course it means that it
                triggers another function Component execution, and React again needs to check whether
                it needs to change something in the DOM. So even that might not be something you really
                want to do for every keystroke.

                Imagine you would do something more complex, for example send an HTTP request to some
                backend where you check if a username is already in use. You don't want to do that with
                every keystroke because if you do that means you're going to be sending a lot of
                requests. And that might be a lot of unnecessary network traffic.

                So that's something you might want to avoid and even you also don't want to update the
                state with every keystroke. Instead, you might want to do is that you collect a certain
                amount of keystrokes, or you simply wait for a pause of a certain time duration after
                a keystroke. And only if the pause is long enough you go ahead and do your thing.

                For example, whilst the user is actively typing, I might not want to check if it's a
                valid Email Address. I care about when the user stops typing let's say for 500
                milliseconds or longer. Then I want to check if the Email is valid or not. That's a
                technique which is called debouncing. We want to debounce the user input.

                We want to make sure we're not doing something with every keystroke, but once the user
                made a pause during typing. With useEffect, it's actually easy to implement. We can use
                setTimeout, which is a function built into the browser, to wait for 500 milliseconds
                until we execute some function. Below is the syntax:

                setTimeout(() => {
                    console.log('Checking form validity!');
                    setFormIsValid(
                        enteredEmail.includes('@') && enteredPassword.trim().length > 6
                    );
                }, 500);
                
                After doing the change you will see that this alone doesn't do much. The only result is
                that we don't see the output immediately but with a slight delay of 500 milliseconds,
                which makes sense because for every keystroke we're now setting a timer. So the trick is
                that we actually save the timer and for the next keystroke, we clear it so that we only
                have one ongoing timer at a time. And only the last timer will therefore complete.

                As long as the user keeps on typing we always clear all other timers. Therefore, we only
                have one timer that completes and that completes after 500 milliseconds, which is the
                delay the user has to issue a new keystroke to clear this timer. That might sound complex
                to implement but useEffect makes that very easy actually.

                In the useEffect function, the function you pass as a first argument, you can do something
                we haven't done before. You can return something and the something you return here has
                to be one specific thing. It needs to be a function itself. For example, an anonymous
                arrow function but it could also be a named function, just as for all the places where
                I'm using anonymous functions. And this anonymous function is also called clean up
                function.

                This will run as a cleanup process before useEffect executes setTimeout function the
                next time. To make it clear when it runs, whenever the useEffect function runs, before
                it (useEffect) runs, except for the very first time, the cleanup function will run. And
                in addition, the cleanup function will run whenever the Component you're specifying
                the effect in unmounts from the DOM. So whenever the Component is reused.

                So the cleanup function runs before every new side effect function execution and before
                the Component is removed. And it does not run before the first side effect function
                execution. But thereafter, it will run before every next side effect function execution.
                We can console.log('CleanUp') in the return function to see this happening.

                If we now run the changes, you will see "Checking form validity!" ran, so our side effect
                function code ran. But we don't see the "CleanUp" call. Because of what I said, it does
                not run before the very first side-effect execution. But if I then type here just one
                character, you'll see CleanUp runs immediately and then the code inside of the side
                effect function executed.

                That's how CleanUp runs, it runs before every new side effect function execution. With
                this in mind, we can use the fact that setTimeout actually returns an identifier for
                the timer that was set. We can then use this identifier to clear the timer with the
                built-in clearTimeout function and we can run it in the CleanUp function as:

                clearTimeout(identifier);

                This makes sure that whenever the CleanUp function runs, I clear the timer that was set
                before the side effect function ran and we are able to set a new timer. We clear the
                last timer before we set a new one. If you save the changes and check the console, you
                will see if we type a lot very quickly, you see a lot of CleanUps but you only see one
                "Checking form validity!".

                That means setFormIsValid ran only once for all the keystrokes. If we would be sending
                an HTTP request here, we would have now only sent once instead of a dozen HTTP requests.
                That's an improvement and also a nice example for the CleanUp function and when it
                matters and how it works.
            */}
        </p>
    )
}

export default UsingTheUseEffectCleanUpFunction;