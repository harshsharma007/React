import React from 'react';

const RefactoringAnInputComponent = () => {
    return (
        <p>
            {/*
                There is one last hook, not in general there are more hooks, but there is one last hook
                which I want to dive in right now because it fits really well into this section here
                into this module. For that we have to change our code a little bit. We'll create a new
                Component, an Input Component that contains our input divs and that receives all the
                data it needs through props.

                So that just like the Button and it's reusable because we will indeed reuse it for the
                Email and the Password input. For that in the UI folder, I'll add an Input folder with
                the Input.js and Input.module.css file. The JSX that should be returned from this Input 
                file should be the div of the Email, so just cut and paste in this file.

                And move the CSS from the Login.module.css file to the Input.module.css which are
                related to the Input controls. After that we have to change the Input Component to
                expect some data from outside. So we have to refer props and doing this way we make a
                reusable Input Component. We can now use this Component in the Login Component.

                We also need to configure the Input Component in the Login Component, by configuring
                we need to pass the required props to the Input Component. And we need to do the same
                changes for the Password field. With that we should have the same behavior as before,
                but now we have the separate Components. And that's a nice practice and that's always
                good.

                And it's also a good example for when we want to use props versus Context. We absolutely
                want props here because those Input Components should be reusable and therefore we use
                props so that we can configure them from inside the parent where we are using them. If
                we would use Context inside of the input, every input would do the same thing and it
                would be bound to the same Context, it might be less reusable then.
            */}
        </p>
    )
}

export default RefactoringAnInputComponent;