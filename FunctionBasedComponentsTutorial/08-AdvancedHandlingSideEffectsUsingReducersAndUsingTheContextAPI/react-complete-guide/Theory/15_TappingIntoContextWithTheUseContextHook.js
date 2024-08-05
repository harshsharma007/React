import React from 'react';

const TappingIntoContextWithTheUseContextHook = () => {
    return (
        <p>
            {/*
                So let's explore the useContext Hook. For that we need to import a hook from React and
                the name of the hook is useContext. This hook allows us to use the context and listen
                to it. Using it is simple you call useContext in your React Component Function and you
                pass the context appointer at the context you want to use to it.

                In our case, I'm pointing to AuthContext. Now what you get back is the context value.
                I'll store this in a ctx const. With that we can save this and it will work just fine.
                This is all we need to do and this of course is a way more elegant and a bit nicer than
                using AuthContext.Consumer.
            */}
        </p>
    )
}

export default TappingIntoContextWithTheUseContextHook;