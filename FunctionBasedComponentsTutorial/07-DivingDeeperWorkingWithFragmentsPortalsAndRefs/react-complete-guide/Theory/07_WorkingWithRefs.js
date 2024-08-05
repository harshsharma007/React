import React from 'react';

const WorkingWithRefs = () => {
    return (
        <p>
            {/*
                With Fragments and Portals, we had two cool features that helps us write cleaner HTML
                code. The App worked exactly the same way before we added those features too but with
                those features, we end up with semantically more correct HTML code and that's never a
                bad thing. It makes your app more accessible, makes sure you don't render unnecessarily
                many divs and in general shows that you are a developer who knows what he's doing.

                Now let's move on to one last key feature, which does something different than Fragments
                and Portals that would be refs. References but the name in React is just ref, so the
                short form of reference. What do refs do?

                Refs are quite powerful but in their most basic form, they allow us to get access to
                other DOM elements and work with them. Now, what do I mean with that?

                Let's go to the AddUser Component again, there we have our inputs and we manage what the
                user enters by simply keeping track of it. We simply have our state and with every
                keystroke, we update our state. With every keystroke, we update the value we get by the
                user and we store it in our state and we feed that state back into the input and we
                then use that state later on to reset the inputs but also to send it to the place where
                we need the data.

                That is a perfectly fine way of managing this. But updating the state with every
                keystroke when we only need it when we submit the form sounds a bit redundant to me.
                And that's a scenario where refs could help us, though they're not limited to that. How
                do refs work?

                With refs, we can set up a connection between a HTML element which is being rendered
                in the end and our other JavaScript code. For that we need to create a ref, which we do
                with the help of another React hook. We use the {useRef} hook and we then simply call
                useRef in our code, in our functional Component. And like all React hooks, useRef is only 
                usable inside of functional Components.

                Now, what does useRef return and which value does it takes?

                It takes a default value you want to initialize it to and it returns a value which allows
                us to work with that ref later, so which allows us to work with that element to which
                we're going to connect it.

                const nameInputRef = useRef();
                const ageInputRef = useRef();

                They are initialized to be undefined because that's the default. We can let React know
                that we want to connect a ref to a HTML element by going to that element to which we
                want to connect the ref and adding a special prop there, the ref prop. Just like the
                key prop, that's a built-in prop which you can add to any HTML element because (important)
                you can connect any HTML element to one of your references.

                <input id="username" ref={nameInputRef} />

                With that I am connecting the ref with the JSX code that is rendered by the same
                Component. And now a connection will be established and the first time React reaches
                this JSX code and renders this JSX code, it will actually set the values stored in
                nameInputRef to the native DOM element that is rendered based on the input.

                What will end up inside of nameInputRef in the end will really be a real DOM element
                later. Let's do the same for age with ageInputRef. And in the addUserHandler function
                if you console.log(nameInputRef), you will see there's an object being output and that
                object has a current property.

                Important: The ref value which is being generated always is an object, which always has
                a current prop and the current prop holds the actual value that ref is connected with.
                By default, it's undefined but as soon as the JSX code ran because of the ref prop in
                it, the nameInputRef is connected to that input and hence, it's actually the input which
                is being stored as a value in the current prop.

                Output:
                {current: input#username}

                What's being stored here is the actual DOM node. Not some theoretical value or anything
                like that but the real DOM node, which you could now manipulate and do all kinds of
                things with. It is recommended that you don't manipulate it, you DOM should only be
                manipulated by React.

                You're using React to let it do all the heavy lifting but reading data from the input
                doesn't sound too bad because you're not changing anything with that. You're just reading
                data.

                nameInputRef.current.value

                Current refers to the value stored and the value stored is the input element and every
                input element has a value property in JavaScript. And we could get rid of the entire
                state management section. After doing the changes and running the application again, we
                will see that our application is working in exact same manner.

                However during the process we lost our resetting logic. To bring it back, we got two
                options, we can switch back to the state-based solution which is not bad. Or we do
                something which you should rarely do but which actually is okay here in the context of
                an input field value which you want to reset.

                You can manipulate the DOM without React and yes I said you shouldn't do that and you
                typically shouldn't do that but if you just want to reset the value entered by a user,
                it is something you can consider doing. So we could use:

                nameInputRef.current.value = ''
                ageInputRef.current.value = ''

                With these two lines, if we now check it again you see now it's cleared. Again, rarely
                use refs to manipulate the DOM. Here we're not really manipulating the DOM, we're not
                adding a new element or changing a CSS class, I'm changing what the user entered. You
                could argue you don't even want to do that and in that case, you can always return back
                to the state-based solution but I think it's fine.

                In general, the question is not whether refs or state is better. You can use either of
                two. You will sometimes have use cases where you just want to quickly read a value, for
                example. And if you only want to read a value and you never plan on changing anything,
                well, then you don't really need state because just to use state as a keylogger is not
                that great. It's a lot of unnecessary code and work.

                So, if you just want to read a value, refs are probably better. In scenarios like this,
                it's up to you what you prefer. Refs, which are a little bit less code but you have the
                edge case of manipulating the DOM, or a state, which is definitely cleaner but is a
                bit more code.

                It's up to you but we will see refs throughout this course and you will see them in a
                lot of projects, in a lot of React projects because getting access to elements is quite
                convenient and as I said, they can even do a bit more than that but will see them again
                throughout the course. This is just an introduction and this is all you need to know
                about refs right now.
            */}
        </p>
    )
}

export default WorkingWithRefs;