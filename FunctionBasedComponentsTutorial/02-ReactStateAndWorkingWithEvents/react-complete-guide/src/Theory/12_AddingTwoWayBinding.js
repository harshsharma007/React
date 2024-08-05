import React from 'react';

const AddingTwoWayBinding = () => {
    return (
        <p>
            {/*
                How can we clear those inputs?
                That's part of the reason why I wanted to useState for storing the entered values. We
                could've also used the global variables outside of the Component function, if we just
                wanted to persist the values, but by using state we have an advantage.

                We can now implement something which is called two-way binding, which simply means that
                for inputs we don't just listen to changes, but we can also pass a new value back into
                the input. So that we can reset or change the input programmatically.

                And how do we do that? It's very simple all we have to do is add the value attribute,
                which is a default attribute to the input element. This will set the internal value
                property, which every input elment has and we can set it to a new value. We just have
                to bind it to the {enteredTitle}. This is two way binding because now we don't just
                listen to the changes in the input to update our state.

                But we also feed the state back into the input so that when we change the state, we also
                change input. This might sound like an infinite loop, but it actually isn't. So we
                won't have a problem there.
                
                But the advantage is that when the form in submitted for example, we can call
                setEnteredTitle and set this back to the empty string, which also was initial state.
                And by doing that, we override what the user entered after the form was submitted and
                therefore cleared the input.

                This is another key concept in React. Two-way binding is very useful when you're working
                with forms because it allows you to gather user input, but then also change it e.g.
                upon form submission.
            */}
        </p>
    )
}

export default AddingTwoWayBinding;