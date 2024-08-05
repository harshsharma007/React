import React from 'react';

const IntroducingReactContextAPI = () => {
    return (
        <p>
            {/*
                So with useReducer out of the way, let's dive into a different problem you might face
                in bigger React applications specifically, but even in this tiny demo here, we already
                have it, that can be solved in a more elegant way. I'm talking about a problem, where
                you are passing a lot of data through a lot of Components via props.

                And a good example is our isLoggedIn state and the Login functions. We're managing this
                state in the App Component because I lifted state up to that Component because we
                basically need this state, isLoggedIn state and the functions to change it everywhere
                in this application.

                We use the isLoggedIn state in the MainHeader Component to which I'm passing it through
                the isAuthenticated prop. From there, we are able to logout, so I passed the pointer at
                the logoutHandler to the MainHeader on the onLogout prop. And we also need the Login
                state to render different content either the Login or the Home Component and to those
                Components I also passed the logoutHandler or the loginHandler.

                The logoutHandler being passed to the Home Component, so that we theoretically could add
                a button in the Home Component to allow the user to logout there as well. Long story
                short, we need or we use the Login state in a lot of different places in the app. Now,
                this is a very simple app, a very simple demo and here passing our state around is not
                a huge problem.

                This is quite common that you pass data to Components through props, but it's always a
                problem if you forward state through multiple Components. If you basically just leverage
                props to forward data to another Component. That's something we are doing in the
                MainHeader. Here in the App Component, I'm passing isLoggedIn through the isAuthenticated
                prop to MainHeader.

                And I'm passing the logoutHandler through the onLogout prop to the MainHeader as well.
                In the MainHeader though, I'm using neither of those two props. I'm using them only to
                forward them again to the Navigation Component because it's the Navigation Component
                in the end, which needs the isLoggedIn data to render different links and which needs
                the onLogout prop and the logoutHandler, to do something when the Logout button is
                clicked.

                Essentially what I'm doing here is in the MainHeader I'm receiving data through props,
                which I'm not using primarily in the MainHeader. Instead, I just forward that data.
                That's not necessarily a problem but in bigger apps that chain of forwarding might
                become longer and longer.

                For example check the word document section Introducing React Context:

                Consider this example of a fictional app. In the Login form we might have the Login
                event when the user fills out the form and submits the form, and we validate the data
                and find out that the user is logged in. And we might need that Login data, the
                information that the user is logged in different parts of the app.

                We might need it in the Shop, Cart to show the Cart to avoid that the user can go there
                if he or she is not logged in. It's easy to imagine that we need information about the
                Login status in different parts of the app and we have something similar. Let's say the
                user adds a Product to the Cart, we need that information in the Cart Component to
                show the product there.

                But since the Product is a direct child of Products, which is a child of Shop and which
                is a child of App. Since the Login event happens in the LoginForm, which is the child
                of Auth, which is the child of App we don't have those direct connections to the other
                Components where the data might be needed.

                If a user clicks a button in the Product Component to add a product to the Cart, the
                information needs to reach the Cart Component but there is no direct connection between
                the Product Component and the Cart Component. And the same for the Login and therefore,
                what we typically would do, is we would use props to pass a function handler to the
                LoginForm, so that in there we can call it.

                But that essentially means, that we're forwarding data through our different Components.
                And the same, if we add something to the Cart that means that this function that should
                be triggered when the user adds something to the Cart would probably be managed in the
                App Component, because we lifted the state up to the level where we have access to both
                the Product Component indirectly and the Card Component.

                That's only the case in the App Component, only this Component has at least indirect
                connections to both components, Product and Cart. Therefore, we would forward a pointer
                to the Add to Cart function through all those other Components, the Shop Component and
                the Products Component, even though those Components probably don't need that function.

                They only need it so that they can forward it to the Product Component in the end.
                Therefore, in bigger apps you could easily build such prop chains, which are used to
                forward data through Components to other Components. That's something you can do, and
                that's not necessarily bad but the bigger your app gets, the more inconvenient it is
                to do that.

                Instead, it would be nice if we could use props in a Component to only receive the data
                this Component really needs from its parent, and not to forward our data through the
                parent which the parent doesn't ever manage nor need itself. For that we got a
                Component-Wide, "behing the scenes", State Storage built into React.

                We have a concept called React Context, and this then allows us to trigger an action
                in that Component-Wide State Storage, and then directly pass that to the Component that
                is interested without building such a long prop chain. And that allows us to solve our
                problem in a more elegant way.
            */}
        </p>
    )
}

export default IntroducingReactContextAPI;