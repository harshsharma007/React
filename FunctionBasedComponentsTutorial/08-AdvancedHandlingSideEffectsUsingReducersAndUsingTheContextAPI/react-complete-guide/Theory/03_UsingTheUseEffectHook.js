import React from 'react';

const UsingTheUseEffectHook = () => {
    return (
        <p>
            {/*
                If you run the project you will see a Login screen and in this Login screen you can enter
                any credentials of your choice. That's not a real authentication screen it's just a
                dummy screen. As long as you have a valid Email address and a password that is at least
                seven characters long you can click the Login button and you're allowed to enter a
                dummy Welcome Screen.

                Logout button will take you back to the Login screen but other links won't work. At the
                moment, there is no real authentication logic but we will dive into it soon. But it is
                a good enough example to practice the useEffect hook and side effects they offer and
                also the other core concepts of this module.

                We could send a HTTP request to a backend server which validates our Email and Password
                but at the moment we don't have such server. At the moment, when I login with any
                dummy credentials you would be soon dummy Welcome Screen but as soon as you reload the
                page you'll always lose the login status. That is probably not something you want.

                In reality you would (once you login) send the request to the backend and get back some
                log-in data for example some token which identifies the user as authenticated. But you
                want to make sure that this user is authenticated once you reload the page. Right now,
                we lose this because in the App.js file, where I manage the {isLoggedIn} state, it's
                just managed as some React state.

                In the end, it is managed in some JavaScript variable behind the scenes by React. The
                nature is when you reload your application, your entire React script restarts and all
                variables from the last execution are lost. That's how the web and scripts and the
                browser works this is nothing React specific.

                Since we lose all the data, when this restarts it would be nice to store it somewhere
                where it persists the reload. Even better than that we also want to make sure that
                whenever this App does start, we check if the data was persisted. And if it is we log
                the user in automatically so the user doesn't need to re-enter the details.

                That's where we can use useEffect. Let's start with storing the data, here in the
                {loginHandler} I setIsLoggedIn to true and that's where I want to store that piece of
                information in the browser storage. The browser has multiple storages we can use, the
                most common storage for this would be cookies or localStorage.

                Since it is easy to work with localStorage, we will use localStorage. That's a storage
                mechanism built into the browser totally independent of React. Moreover, this is a
                global object which is available in the browser and below is the syntax:

                localStorage.setItem('isLoggedIn', '1');

                In the setItem() method you can give any string identifier like isLoggedIn and the
                second argument should also be a string that could signal the user isLoggedIn.

                1 could state user is logged in whereas, 0 indicates user is not logged in. You could
                also have some identifier like 'LOGGED_IN' in place of 1. After doing the change and
                if we reloads the project and after logging in the project, if you open the developer
                tools and in it open the Application tab and you will find Local Storage section.

                In it you will find the isLoggedIn key with a value of 1. We can do stemming of
                localStorage in a function because it is a function that executes only when the user
                clicks the button, which is rare enough and which is exactly when we want to store
                something. That's now a use case where we don't need useEffect necessarily.

                But how about the scenario that the App restarts because the user left the page and
                comes back or simply because we reload the page. Then we want to check if in
                localStorage we have that key value pair. When the app restarts the App Component
                function runs again.

                Therefore, in the App() function we could reach out to localStorage call getItem and
                search for isLoggedIn and this will return the items stored there.

                const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

                if (storedUserLoggedInInformation === '1') {
                    setIsLoggedIn(true);
                }

                This will set the user to LoggedIn even without the loginHandler() function being
                triggered. As it would trigger upon pressing the Login button just because we know that
                the user is logged in. We should do that after setting the state. We could do like this
                (inside a function).

                But the huge disadvantage with that approach is that we would create an infinite loop.
                Because we check for localStorage being stored, if it is stored we setIsLoggedIn to true.
                And whenever we call a state setting function the Component function re-executes and
                therefore this would run again would find one would set it again and so on.

                So we need useEffect here because that allows us to control windows runs. Hence from
                React, besides useState we import useEffect hook. And then inside of the App Component
                function we can simply call useEffect like this:

                useEffect(() => {
                    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

                    if (storedUserLoggedInInformation === '1') {
                        setIsLoggedIn(true);
                    }
                }, []);

                And we need to pass two arguements, the first argument is a function (anonymous function).
                Doesn't have to be an anonymous function but often you use just such a function. The
                second argument is an array of dependencies.

                In the anonymous function, we can now run the code of localStorage, which we don't want
                to run directly in the Component function. Because now this anonymous function here is
                executed by React and it is executed after (IMPORTANT) every Component re-evaluation.
                So whenever the Component function ran thereafter, useEffect will run.

                And if you then update the state in useEffect() hook, the Component will run again.
                But it will not just run after every Component evaluation but only if the dependencies
                are changed. When the App starts for the first time that will be the case. If the App
                Component function runs for the very first time because your App just started, then
                the dependencies are considered to have changed because you had no dependencies before
                you could say.

                But one it ran for the first time for example, we have no dependencies right now but
                therefore of course they also didn't change compared to the first execution cycle.
                Therefore, the anonymous function would indeed only run once when the App starts because
                thereafter the dependencies never change because useEffect specifically has no
                dependencies.

                And in this scenario, that's exactly what we want. We want to run the code once and
                that's when our App starts up.

                Once the app started, the useEffect code runs and we update the state in it and as you
                learned this triggers the Component function to run again. Therefore this all runs
                again, the JSX code is evaluated and the DOM is updated accordingly but thereafter the
                useEffect would run again but only if our dependencies are also changed. And that's not
                the case here.

                And hence if we save and re-runs the code we will see we can refresh the page but we are
                no longer logged out from the website. And the reason for this is that we have the
                localStorage stored. If we clear the localStorage manually and if you now reload the
                page you'll redirected to the Login page.

                That's useEffect and that's one scenario where it shines a lot and the data fetching is
                a side effect. It's not directly related to the UI but the result is but not the data
                storage access itself. And we want to run it as a side effect with useEffect in this
                case to avoid an infinite loop.

                To remove localStorage when the user clicks on the Logout button we need to call
                removeItem() function.
            */}
        </p>
    )
}

export default UsingTheUseEffectHook;