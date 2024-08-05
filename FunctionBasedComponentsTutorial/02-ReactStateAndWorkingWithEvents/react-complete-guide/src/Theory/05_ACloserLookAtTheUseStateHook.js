import React from 'react';

const ACloserLookAtTheUseStateHook = () => {
    return (
        <p>
            {/*
                State as you can probably tell by now is a key concept in React. useState registers
                some state, some value as a state for the Component in which it is being called and I
                wanna be even more precise here. It registers it for a specific Component instance.

                For example, ExpenseItem here is being used 4 times. In Expenses.js we have 4
                ExpenseItems. Now every item receives its own separate state which is detached from the
                other states. We have one ExpenseItem defintion here, but then this function is basically
                called four times when we create 4 ExpenseItems.

                Every time it's called, a new separate state is created of course in the same way but
                managed independently by React. So if we change the title in the first ExpenseItem
                the other ones are not affected because they have their own state and that's really
                important.

                It's on a per component instance basis. So we have separate states even if we create a
                Component more than once. And that's of course crucial because it would be a rather
                undesired behavior if we change something in one item and all the other items are
                updated as well. So that's a good thing to have.

                In addition, whenever state changes because we click a button in this case it's only
                this Component function and only that specific instance where this Component is being
                used where React will re-evaluate it.

                And you can tell that this is the fact if you add a console.log('ExpenseItem evaluated')
                below useState() function. This will be called whenever the ExpenseItem Component
                function is being executed. And therefore if I reload, we see it's called 4 times which
                makes a lot of sense because we're using ExpenseItem 4 times in Expenses. So 4 separate
                instances of this Component are being created.

                But if we click on Change Title button in one of the ExpenseItem, we see it's only
                printed once, which is basically happening because of what I just explained. Only that
                specific instance is being updated and therefore being re-evaluated and the other
                instances are not affected by that state change. And that's important to keep in mind
                that state really is separated on a per Component instance basis.

                There is one other thing which could be confusing, which is why we are using const,
                when we do eventually assign a new value?

                To keep in mind, we are not assigning a value with the equal sign. That would indeed
                fail but that is not how we assign a new value when we update a state. Instead we call
                the state updating function, and the concrete value is simply managed somewhere else by
                React. By calling useState we tell React that it should manage some values for us. We
                never see that variable itself.

                So therefore, we just call a function and we never assign a new value to title with the
                equal operator. And therefore, using a const is absolutely fine. How do we get the
                latest title value then?

                Keep in mind that the Component function is re-executed when the state is updated.
                Therefore, of course, this line of code:

                const [title, setTitle] = useState(props.title);

                also is executed again whenever the Component function is executed again. So, if we call
                setTitle and we assign a new title that leads to this Component being called again and
                therefore, this new updated title is fetched from React, which manages the state for us.

                Basically, we go to React and say, "Hey please give me that latest title state which I
                told to manage for me". And, React provides us the latest state in the array which
                useState always returns. So we always get a brand new snapshot of that state when this
                Component function re-executes. That's how this works under the hood.

                Now you might be wondering if that doesn't mean that we always overwrite any state
                changes with props.title again. The special thing is that React keeps track of when we
                call useState in a given Component instance for the first time.

                And when we call it for the first time ever, it'll take that argument as an initial
                value. But if a Component is then re-executed because of such a state change, for
                example, React will not reinitialize the state.

                Instead, it will detect that this state has been initialized in the past, and it will just
                grab the latest state which is based on some state update, for example and give us
                that state instead.

                So the initial value

                const [title, setTitle] = useState(props.title);

                is really only considered when the Component function is being executed for the first
                time, for a given Component instance.

                And I know that this is a lot of knowledge about state and it might be confusing to a
                certain extent. It is just important to understand how state works under the hood,
                because if you don't fully understand that then you will run into problems in more
                complex React applications where suddenly some value isn't updated as you expected it to
                be.
            */}
        </p>
    )
}

export default ACloserLookAtTheUseStateHook;