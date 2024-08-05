import React from 'react';

const ListeningToUserInput = () => {
    return (
        <p>
            {/*
                Let's now work on gathering user input. To listen to the user input we need to add
                listeners for every key stroke or for every change of these inputs I want to get the
                value a user has input and just log it to the console.

                We can use onChange event, it will trigger on every keystroke but the advantage of
                onChange is that we can use that same event for all input types. For example, for
                dropdowns.

                So for input tag, we will add onChange event listener and under the hood, this will then
                add an event listener for the change event to the input element which is rendered
                in the DOM. And then we need to point at the function that should be executed when that
                event occurs.

                How to get the value a user has input?
                In Vanilla JavaScript, if you would add an event listener to some element in Vanilla
                JavaScript like the code below and you are listening to the click event and in the
                function which you pass as a second argument there you automatically get an event object
                which describes the event which occured. That's the default JavaScript behavior, you
                get in the browser when you listen to events.

                document.getElementById('').addEventListener('click', (event) => {})

                And, we get this default event object in our titleChangeHandler as well automatically.
                We don't need to do anything to get this. React will make sure or actually even the
                browser itself will make sure that we get such an event object when this change event
                occurs.
            */}
        </p>
    )
}

export default ListeningToUserInput;