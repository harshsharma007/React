import React from 'react';

const CreatingAWrapperComponent = () => {
    return (
        <p>
            {/*
                So, let me introduce the solution to you. What if we would use a dirty little trick?

                In our Components folder, I'll add a new sub folder "Helpers". I'll name it Helpers
                because that best describes which kind of Component I'm going to add. I'm going to add
                a wrapper Component. I'll name the file Wrapper.js and in there, I won't event import
                React because I'm not going to write any JSX code in there.

                Instead, I'll just create my Wrapper Component with an empty function body and export
                this wrapper. And now you might be wondering what I'm going to do here, if I'm not
                writing any JSX code. Well, I'll just return props.children. Remember the children props
                holds all the content you're passing between the opening and closing tag of your
                custom Component.

                Now it is valid in a Component to just return that content which you got between the
                opening and closing tags. And now I can import my wrapper, for example, here in AddUser
                I can import Wrapper and I can use it as a regular React Component. So I can go down
                and replace my div which has no other meaning than fulfilling the JSX requirement with
                my wrapper.

                So, I'm using my Wrapper Component here and just to make this really clear, this is
                basically an empty Component. Everything it does is that it returns props.children.
                But this is enough to fulfill this requirement JSX has. If I save this my application
                still works just fine.

                And it works just fine because an AddUser have a wrapping element. It's an element which
                won't render anything to the DOM, but the requirement is not that there must be one root
                Component being rendered to the DOM. The requirement just is that there must be one
                root element that you return or that you store in a constant or a variable.

                That's what we're doing here, we have one root element, The Wrapper, and what we pass
                into that Wrapper may be adjacent but all the content is taken and just returned in the
                Wrapper Component but that is okay because in the return statement, I technically still
                only return one thing, I return the value in props.children.

                This can be tough to wrap your head around but this is just a technical requirement of
                JavaScript around which we're working here. I just work around that requirement by
                returning one thing in Wrapper Component and one thing in AddUser Component. And what we
                get in props.children will be the adjacent content.

                But that will be not a problem because I never directly returned that in my code. And
                this will therefore work just fine. This will not cause any errors as you can clearly
                tell. And that's a nice little trick for solving this problem because if we now have a
                look at the Elements tab and therefore at the DOM, which is actually being rendered, we
                see that if I inspect my AddForm Component, we see there is a div around it but that
                just is a Card's div.

                But what we also see is if I click AddUser that the Modal div is also being added. But
                around that we do have a wrapping div but this is actually the div coming from the
                App Component where I also have the wrapping div. This is not coming from inside of the
                AddUser Component.

                Inside from inside there, nothing is being rendered into real DOM. We got the Card and
                above that nothing. Because again this div which is above it is coming from the App
                Component.
            */}
        </p>
    )
}

export default CreatingAWrapperComponent;