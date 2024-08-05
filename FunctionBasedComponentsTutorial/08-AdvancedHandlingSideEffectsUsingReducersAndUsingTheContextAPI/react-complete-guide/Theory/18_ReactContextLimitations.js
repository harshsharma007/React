import React from 'react';

const ReactContextLimitations = () => {
    return (
        <p>
            {/*
                So React Context is great. Let's use it for everything. Well, not quite. For one, keep
                in mind what I mentioned earlier. It can be great for App-Wide or Component-Wide state.
                So essentially states that affects multiple Components. It's not a replacement for
                Component configuration.

                Consider our button in the UI folder. The button should be reusable. Sure, we could use
                Context to make sure that upon a click we always log the user out, but that would mean
                that we can't use the button for anything else than logging users out. And that might
                not be what you want.

                For example, in our application, we are using the same Button Component in the Login
                Component to log the user in and trigger the form submission as well we're using it in
                the Home Component to log the user out. So that is a scenario where using Context in the
                Button Component would be bad.

                You want to use props here to configure the Button. So props for configuration, context
                for State Management across Components or possibly across the entire App. But even then
                we have limitations, React Context is specifically not optimized for high frequency
                changes. That means if you have state changes every second or multiple times per second,
                this is clearly not the case in our example for authentication.

                That does not change that often, it changes once every few minutes in reality, maybe
                not even that. So that is a perfect use case for Context. But if you had state changes
                that happen much more frequently, (talking about multiple changes per second) then React
                Context is not optimized for that and this was stated by the official React team member.

                So it's not great for high-frequency changes. Now you might wonder, what if I have
                App-Wide or a Component-Wide state that changes often? I would want to use Context for
                that props might not be ideal and you're telling me that it's bad. We'll explore a better
                tool for that later.

                It will be called Redux. And as I mentioned, it should not be used to replace all
                Component communications on props. Props are still vital and important for Component
                configuration. So you should still use props for that and not use Context for everything.
                For replacing long props chains it might however be worth the look.
            */}
        </p>
    )
}

export default ReactContextLimitations;