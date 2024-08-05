import React from "react";

const BuildingAndUsingACustomContextProviderComponent = () => {
  return (
    <p>
      {/*
                A little enhancement to our context. It is a good idea to also add your functions like
                onLogout to the default context when you create a context. And there you can just store
                a dummy function which does nothing. I'm doing this for better IDE auto-completion.
                Because you will see that if I don't have onLogout here and in the Navigation Component,
                if I try to call onLogout, I'm not getting any suggestion by IDE. It doesn't know that
                there is a onLogout prop.

                On the other hand, you will see suggestion for isLoggedIn and that's simply happening
                because the way React works and the way Visual Studio Code works. It's looking at the
                default context object to find out what you are able to access on your context. So for
                better IDE auto-completion, it is a good idea to add onLogout to the default context
                object as well just with a dummy function because we're not going to use it anyways.

                Then you will see that now I get the onLogout auto-completion. So that's just a tiny
                hint you might consider because it can be helpful. Another thing that you might consider
                is depending on your application structure and how you're managing your data, you also
                might want to pull more logic out of (for example) App Component and create a separate
                Context Management Component. How could this look like?

                Well, maybe in our AuthContext store file, we could write the below code:

                export const AuthContextProvider = (props) => {
                    return <AuthContext.Provider>
                        {props.children}
                    </AuthContext.Provider>
                }

                In the file, we just don't export AuthContext as the default but I also export my
                AuthContextProvider in addition to the default as a named export. Why am I doing that?

                Because now we can actually also import useState here inside of the auth-context.js
                file, and manage the isLoggedIn state and setIsLoggedIn here inside of the
                AuthContextProvider. Add the logoutHandler function and the loginHandler function:

                export const AuthContextProvider = (props) => {
                    const [isLoggedIn, setIsLoggedIn] = useState(false);

                    const logoutHandler = () => {
                        setIsLoggedIn(false)
                    }

                    const loginHandler = () => {
                        setIsLoggedIn(true)
                    }

                    return (
                        <AuthContext.Provider 
                            value={{ 
                                isLoggedIn: isLoggedIn, 
                                onLogout: logoutHandler, 
                                onLogin: loginHandler 
                            }}>
                            {props.children}
                        </AuthContext.Provider>
                    )
                }

                So that we manage the entire Authentication state in the separate provider Component.
                Therefore, I will also add onLogin to the default context with a dummy function and this
                dummy function will receive email and password. We are not doing anything with the
                email and password but technically we would need it in the real app.

                Now we have this standalone file which manages the entire login state in the
                AuthContextProivder Component and which also sets up all the context. The advantage
                here could be, and I'm saying could because this is something you can consider. It always
                depends on your preferences, the exact useCase and the size of your app.

                But this is something you could consider because now we can strip that all out of App
                Component. I'm doing this because now we can wrap the App Component as a whole. Therefore
                in an Index Component, which is where we rendered the App Component with 
                AuthContextProvider. With that we have one central place for the state management and
                that central place is now not the App Component but a dedicated context Component and a
                dedicated context file.

                This might be a structure you might prefer because it is more focused and gives you a
                leaner App Component, which now is not concerned with App-Wide state management but
                which now instead can just focus on bringing something onto the screen. As we are using
                isLoggedIn in App.js, we now need to import useContext in the App Component.

                So we can now use ctx.isLoggedIn and even we can remove the onLogin and onLogout props
                from Login and Home Component in the App Component because we're not managing the
                logout and the login handlers in App Component anyways. In the Home Component, we can
                import the useContext and get access to our AuthContext as shown below:

                const authCtx = useContext(AuthContext);

                And do something similar in the Login Component. Again, this is totally optional but the
                advantage here could be that you have a leaner App Component which again is now just
                focused on returning JSX and bringing something onto the screen. And you have the actual
                auth state management and auth-context management all in one file.

                Some developers including myself often prefer this more focused and separated approach
                where you have Components, where every Component has one job essentially and not a ton of
                jobs. Therefore, I'm fan of this split but as often it's not the only way of doing this
                and it's also not the only correct way. It's definitely a practice that is worth looking
                into, a practice you might see in projects out there.
            */}
    </p>
  );
};

export default BuildingAndUsingACustomContextProviderComponent;
