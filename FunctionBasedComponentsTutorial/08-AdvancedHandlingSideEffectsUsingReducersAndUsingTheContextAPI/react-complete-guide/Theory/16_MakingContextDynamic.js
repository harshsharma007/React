import React from 'react';

const MakingContextDynamic = () => {
    return (
        <p>
            {/*
                So we're using useContext to pass the isLoggedIn state to my other Components. But you
                will notice that we're still forwarding the onLogout prop or the logout handler function
                through props and that's still not ideal. It would be nicer if we could use the
                MainHeader alone without passing any data to it. Because we don't need to forward
                onLogout.

                The good thing is we can set up a dynamic context where we don't just pass data to other
                Components but also functions, which technically is also a data. Here all we need to
                do is in our AuthContext.Provider where we set up the value besides passing down
                isLoggedIn, we can also pass down onLogout where we point at the logoutHandler.

                <AuthContext.Provider value={{
                    isLoggedIn: isLoggedIn,
                    onLogout: logoutHandler
                }}>

                If I do that then every listening Component, every Component that listens to AuthContext
                will be able to utilize logoutHandler simply through the onLogout context value.
                Therefore, back in Navigation where we are referring to props.onLogout we can now simply
                do ctx.onLogout. This will work because on the context object we now have the onLogout
                value.

                This will now work with the help of context where you cannot just pass down values
                like strings, objects and so on but where you can also pass down functions and therefore
                now we're using the App-Wide or Component-Wide context object to manage our state and
                to manage the function that changes the state.

                Hence, we don't need props in the Navigation Component anymore and we can remove it. And
                you now have a great example for using context. In my <main> section, I'll still pass
                down the logoutHandler through onLogout and the loginHandler through onLogin because I
                directly use those handlers in the Login and Home Components.

                You see in the Login Component we directly refer to props.onLogin where we're not
                forwarding it, we're using it here and the same in the Home Component. I'm directly using
                onLogout here. Sure we're technically forwarding it to our own Button Component but
                this is a pure presentational Component.

                And this here is actually fine. I don't want to use context inside of my Button to
                always bind Button onclicks to onLogout because whilst this would remove the need to
                pass onLogout, it would also mean that our Button is now always logging the user out
                and not able to do anything else upon a click.

                This also shows you when to use props and when to use context. In most cases, you will
                use props to pass data to Components because props are your mechanism to configure
                Components and to make them reusable. Only if you have something which you would forward
                throught a lot of Components and you're forwarding it to a Component that does something
                very specific.

                For example, the Navigation where the button will always log the user out. In such cases,
                you want to consider Context and as with everything in programming with more experience
                it will also become clear and more natural when to use what. You can always rely on
                prop chain if you prefer that but context allows you to write more concise code and it
                often makes managing such App-Wide state simply a bit easier.
            */}
        </p>
    )
}

export default MakingContextDynamic;