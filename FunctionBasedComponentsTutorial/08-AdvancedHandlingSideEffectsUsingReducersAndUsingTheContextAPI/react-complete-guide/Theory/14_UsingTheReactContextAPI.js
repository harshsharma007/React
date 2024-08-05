import React from 'react';

const UsingTheReactContextAPI = () => {
    return (
        <p>
            {/*
                So as I mentioned, we have the React Context Concept which allows us to manage State
                behind the scenes in React, such that we actually are able to directly change it from
                any Component in our App and directly pass it to any Component in our App without
                building such a prop chain.

                For that in my source (src) folder, I will add a new folder "store" and in there I'll
                add a new file and since we are going to manage some authentication state I will add
                auth-context.js file. You could also name it as AuthContext.js but this would imply
                we're going to store a Component in there and that's not directly what we are doing.

                Hence, I will go with this naming (auth-context.js) using kebab case. You can have
                multiple context for multiple global states in your app or you can use just one context
                for a bigger state. Below is the code of a context file:

                import React from 'react';

                const AuthContext = React.createContext({
                    isLoggedIn: false
                });

                export default AuthContext;

                We need to call React.createContext() and this does what the name implies. It creates
                a Context object in the end. React.createContext takes a default Context and Context
                here is just your app or Component wide state. So it's up to you what the state should
                be. It could be something simple just a string, if your app wide or Component wide state
                is some text.

                Often though it will be an object, where we manage the isLoggedIn state and set this to
                false initially. What we get back from createContext is an object that also contains
                Components. So we get back AuthContext and I'll name it like this because whilst
                AuthContext itself is not a Component, it is an object that will contain a Component.

                We will need this object in other Components, so I'll export it as a default. To use
                Context in your app you need to do two things, you need to provide it, which basically
                tells React, All Components that are wrapped by it should have access to it. And besides
                providing you then need to consume it (listen it).

                Providing is always the first step, providing means that you wrap in JSX code all the
                Components that should be able to tap into that Context. So that should be able to
                listen to that Context. Any Component that's not wrapped will not be able to listen. So
                if we know that we need this Context everywhere in the entire application, we want to
                wrap everything in App Component with it.

                If we knew that we only need it in the Login Component and its child Components, we
                could only wrap to Login Component. In our app, we need it everywhere so we will wrap it
                in the App Component. And in the App Component, we need to use a property of the
                AuthContext and the property name is Provider.

                AuthContext.Provider is a Component we can use in our JSX code, and we can wrap it
                around other Components and those other Components and all their descendant Components
                will now have access to that Context. Since we're using AuthContext as a wrapper we can
                remove React.Fragment.

                After providing, we have the second part and that is the listening part. To get access
                to our value we need to listen and we can listen in two ways. We can listen by using
                AuthContext.Consumer or by using a React Hook. Typically, we will use the React Hook
                but let me show you the other alternative.

                In our Navigation Component, we're interested in knowing whether the user isAuthenticated
                or not. We can wrap the entire Component with AuthContext.Consumer. The consumer works
                a bit differently though, the consumer takes a child which actually should be a function
                between curly braces and as an argument, you'll get your context data.

                Then in the function you should return your JSX code, which should have access to that
                data and in there I have access to ctx.isLoggedIn. If you save the changes you will see
                that the application crashes. And the reason for that is we do have a default value in
                React.createContext but this default value will only be used if we would consume here
                without having a provider.

                So technically the provider is not even needed, however, you should memorize this pattern
                I explained earlier, where you need the provider. Technically, you don't need it if
                you have a default value, but in reality you'll use Context to have a value which can
                change and that will only be possible with a provider.

                To make sure that this does not crash, let's go back to the provider and there on the
                provider Component you can add a value prop, and this has to be named value because
                this is not a Component by you and to that you can also pass your object. In this case,
                I will just repeat my default object but now you would be able to change that object,
                for example, through state in the App Component.

                And whenever it changes, the new value will be passed down to all consuming Components,
                after saving it reloads without problems. And when we login you will see that we only
                have one link in the menu item, Users link is missing because there I'm pulling data
                from my context and at the moment that is never changing.

                Let's make sure we can change it before I then show you the alternative consumer.
                Changing it is easy, we have set up the provider in the App Component and there we
                manage the isLoggedIn state anyways. Instead of hard coding our isLoggedIn value, in
                the value we pass to the provider we can set it to isLoggedIn state.

                The difference to before is that we don't need to use a prop to forward that therefore.
                Instead we just set it on the provider and then everywhere in all child Components,
                we can listen to that. In the MainHeader we can remove isAuthenticated prop and in the
                MainHeader stop forwarding it to the Navigation. And in Navigation we can now use
                ctx.isLoggedIn everywhere we need isLoggedIn information and that's now where we break
                up the props chain, where we stop forwarding that data which we don't need in the
                MainHeader and where we instead leverage Context.

                The consumer is just one way of consuming our Context. It's on okay-ish way, but I don't
                like that syntax too much having that function and then returns our code. You can do
                that, but there is a more elegant way and more elegant solution using the useContext
                Hook.
            */}
        </p>
    )
}

export default UsingTheReactContextAPI;