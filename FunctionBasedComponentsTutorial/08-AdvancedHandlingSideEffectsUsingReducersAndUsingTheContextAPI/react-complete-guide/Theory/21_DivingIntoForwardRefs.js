import React from 'react';

const DivingIntoForwardRefs = () => {
    return (
        <p>
            {/*
                The next hook I want to show you allows us to interact with the Input Component
                imperatively, which means not by passing some state to it that then changes something
                in the Component, but by calling a function inside of a Component, which is something
                you won't need to do often and you shouldn't do often because it's not the typical React
                pattern you want, but sometimes it is helpful.

                It will become clearer what I mean in a second. In the Login Component, let's remove
                the disabled prop from the Button Component function. I don't want to disable the button.
                It should always be clickable now. In the submitHandler, since the button is now always
                clickable, I want to check if the formIsValid and only if it is, I will call onLogin.

                Otherwise, that's now the interesting part, I want to focus the first invalid input field
                I find. For that we have to turn it into an else if statement and check if the
                formIsValid. Both could be invalid, but I want to focus on the first one, which is
                invalid and the first input we have that could be invalid is the Email.

                But now the goal is to focus the input and for a regular input that would be possible
                by putting a ref on it and then we could call the focus method. Just to show you, in
                the Input Component where we have the raw HTML input Component, we could use the useRef
                hook to create an inputRef and then if we want to focus this after the Component was
                rendered, we could use useEffect to run some code after the Component was rendered.

                You learned that the function you pass to useEffect runs after every Component render
                cycle. Let's say we only want to run it once when the Component initially renders hence
                I pass an empty array as a dependency array so that this only runs after the first time
                this Component was executed and rendered.

                And then inside the useEffect, we could focus the input by adding the ref prop to the
                input. The ref prop is supported on all built-in HTML Components like input for example.
                Then you have to call the focus method like the code shown below:
                inputRef.current.focus();

                The focus method is a method that is available on the input DOM object, to which you got
                access through the ref. As a result, since the input will render for both the Email and
                the Password input because that's the second and therefore the last input that's being
                rendered. Hence if it reloads you see the first one is marked as invalid because it was
                temporarily focused, but then the Password is the input that stays focused at the end.

                That's not the behavior we want, but that's something we can do with references and the
                built-in functionalities we have in React and simply in Vanilla JavaScript. Focus is a
                method that's not coming from React but that's built into JavaScript, built into the
                DOM objects, the input DOM object specifically you're dealing with.

                So my goal is to not do that after the input is rendered though. So we can remove
                useEffect. My goal is to have my own method in the Input Component, let's say it's called
                activate and in there I want to use the inputRef.current.focus(). Now the goal is that
                activate is a function that's not called from inside the input but from outside.

                This is a rare scenario because typically, you don't want to code your React projects
                like this, instead you want to work with props and state and pass data down to a Component
                to change something there. But in rare cases, like in this example, it might also be an
                elegant way of focusing the input here, if you could call focus or activate on your
                Input Component, so that you essentially can use your Input Component, as you can use
                the built-in one, because there you have a focus method as well.

                So maybe you want one or in our case, activate function on your own Input Component as
                well. So a rare use case, but you could face it at some point. Now in the Login Component
                where we have our inputs and we simply import useRef hook and then in the Login Component,
                you create your emailInputRef by calling useRef and similarly you create
                passwordInputRef by calling useRef, so that you have two references one for Email and
                one for Password.

                Then we simply add ref prop on the Email input and point emailInputRef and for the
                password point passwordInputRef. Now, we have reference to our Components, one reference
                to our Input Component for the Email and one reference to the Input Component for the
                Password. Therefore, in the submitHandler if the !emailIsValid we can use the:
                emailInputRef.current.activate();

                activate() is the function which we have in our Input and we do the same for Password
                as well. If we try this it will not work though and you will get an error -> function
                Components cannot be given refs. We can't use a ref and our Input Component doesn't
                really do anything with a ref prop internally. It doesn't accept a ref prop on its props
                object. We're not using props.ref anywhere in there. But even if we do, ref is also a kind 
                of a reserved word.

                This approach doesn't seems to be working however, we can make it work. We just need to
                do two things, for one, in the Input Component we need to import another hook and that's
                the useImperativeHandler hook, and this hook allows us to use the Component or the
                functionalities from inside the Component imperatively, which simply means not through
                the regular state props management, not by controlling the Component through state in
                the parent Component, but instead by directly calling or manipulating something in the
                Component programmatically.

                Again, that is something you rarely want to use and therefore, you shouldn't use it very
                often in your projects as well. You want to find an alternative. Nonetheless here, it is
                actually a pretty nice solution for this problem. All we need to do is we need to call
                useImperativeHandle() and pass two things to it.

                Let's start with the second thing, and it is a function and it should return an object.
                That object will contain all the data you will be able to use from outside. For example,
                we can add focus field and then point at the internal function or the internal variable
                or whatever it is that should be accessible from outside through that name. For example,
                point at activate.

                We can name our field anything, it doesn't have to be focus. So the second parameter is
                basically a translation object between internal functionalities and the outside world,
                so the parent Component. The first parameter is actually something we also get here in
                our Component function argument list, thus far we have always worked with props and in
                99.99% of cases that is all you need.

                However, there technically also is a second argument you can accept and that's a ref.
                If a ref should be set from outside, will also need something else to make sure that
                this can be set but this is then avaialble. So if now, the parent Component, the Login
                Component adds the ref prop and binds it to something, essentially, ref here will
                establish the connection.

                This will part of allowing this binding. And it is the ref that we should pass to
                useImperativeHandle. In order to enable the second argument, we need to export our
                Component function in a special way. We need to wrap it with something special and that's
                coming from React and it's called forwardRef.

                That is a function which we execute, to which we pass our Component function. So our
                Component function is now the first argument to forwardRef and forwardRef returns a React 
                Component, so Input still is a React Component but a React Component that is capable of
                being bound to a ref.

                With that Input is now able to take a ref prop and it will expose a ref, and it is
                controllable or usable with refs. But the only thing you will be able to use is what
                you expose through useImperativeHandle. For example, we are exposing the focus function,
                (function because it points at the activate function).

                So in the Login Component, we can call emailInputRef.current.focus because that's the
                external name we set up. With that we can save this and if we now click the login you
                see that Email is selected, the first invalid input and same for Password. This is a
                niche use case, but especially for something like focusing inputs and so on, this can
                be very useful.

                So this is a very realistic use case, which I'm showing to you. With useImperativeHandle
                and forwardRef, you can expose functionalities from a React Component to its parent
                Component to then use your Component in the parent Component through refs and trigger
                certain functionalities. This is something you can do and that does not just work for
                functions, we could also expose the value through refs if we wanted to.

                You should avoid it at all costs but especially in cases like this with focusing but
                also in some other use cases like with scrolling and so on, this can be very useful and
                then triggering something like this programatically is fine and with useImperativeHandle
                and useRef you are able to make it work.
            */}
        </p>
    )
}

export default DivingIntoForwardRefs;