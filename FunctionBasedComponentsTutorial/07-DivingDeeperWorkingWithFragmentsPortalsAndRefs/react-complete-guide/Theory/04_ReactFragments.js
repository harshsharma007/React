import React from 'react';

const ReactFragments = () => {
    return (
        <p>
            {/*
                So with that custom Wrapper Component, we could use a little trick to fulfill this
                requirement and not end up with div soup. Because it's so convenient and also so obvious
                in the end, at least once you saw it, this Wrapper Component is actually not a
                Component we need to build on our own. Instead it comes with React.

                There, it's the Fragment Component which you can access on React.Fragment or you just
                import Fragment from React. Or in some projects you can also use the shortcut below
                marked as with 2 but this depends on your project set up because your build workflow
                needs to support this. The syntax 1 will always works.

                1.
                return (
                    <React.Fragment>
                        <h2>Hi there!</h2>
                        <p>This does not work</p>
                    </React.Fragment>
                )

                2.
                return (
                    <>
                        <h2>Hi there!</h2>
                        <p>This does not work</p>
                    </>
                )

                And that's the same as our wrapper. These two syntaxes here render empty wrappers, which
                don't render any actual HTML element to the DOM. It's just built into React but I showed
                you our custom Wrapper so that you understand what these built-in wrappers do. So, if
                you want to use the built-in wrappers, let's say in the App Component, where I said that
                we also had the problem, we can remove the div and just use these empty tags.

                Now that's not valid HTML and it's also not necessarily valid JSX in all projects. Your
                project set up needs to support it and our project supports it. And hence, now if you
                save, you see it also still works. If I get the Modal again, you see now that one div
                which we had before, is now also gone because I'm now also using the wrapper, the
                fragment as it's officially called in the App Component.

                <>
                </>

                If this syntax does not work or if you don't like it, you can always use React.Fragment
                like this:

                <React.Fragment>
                </React.Fragment>

                and this will then work. You just need to make sure you're importing React. Of you
                directly add Fragment as a named import then you can also use it just by the Fragment
                name.

                <Fragment>
                </Fragment>

                So that of course is what we'll typically use Fragment or React.Fragment. We are not
                typically writing our own wrappers but of course it is important that you understand how
                it works under the hood.
            */}
        </p>
    )
}

export default ReactFragments;