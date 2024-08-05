import React from 'react';

const ControlledVsUncontrolledComponentsStatelessVsStatefulComponents = () => {
    return (
        <p>
            {/*
                Whenever you use two way binding you are controlling a Component, so it is known as a
                Controlled Component. What does that mean?

                It means that a value which is used in the Component like the value selected in the
                dropdown is passed on to a parent Component, through props and is received from the
                parent Component. Both the currently set value, as well as the function which in the end
                handles the selected value is not part of ExpensesFilter.

                ExpensesFilter is really just a Component that presents the UI that presents the dropdown
                and then attaches a couple of listeners or props, but the real logic recites in the
                parent Component and that turns ExpensesFilter into something which is called a
                Controlled Component. Technically, there is no difference.

                ExpensesFilter is still a regular Component as you learned it. It's just a special term
                that when you see it basically means what I just explained that both the value, as well
                as changes to the value are not handled in the Component itself but in a parent
                Component. This Component controls the ExpensesFilter Component.

                And that's just a term which you should be aware of. Another term or another concept
                you should be aware of because you might hear it from time to time is about presentational
                versus stateful Components or stateless versus stateful Components or dumb versus smart
                Components. There are lot of terms for that, but what do they mean?

                It simply means that in basically all React apps which you're building, you will have a
                couple of Components that manage some state like the Expenses Component, which manages
                this filter state or the ExpenseForm Component which manages the input state. And then
                you will have other Components which don't manage any state, like ExpenseItem if we
                remove the button, which we should do because it was just there for demo purposes.

                If we remove it, we can also remove the useState call and we should remove it and from
                other areas where we are refering the useState elements. Then it would be a stateless
                Component also called presentational or dumb Component because it doesn't have any
                internal state it's just there to output some data.

                In most React applications, you will have more presentational and dumb Components than
                smart or stateful Components. So even though dumb might sound negative and it might sound
                like stateful Components are better, that's not the case. These are really just terms
                and typically you end up with less stateful Components than with stateless Components.

                Because you wanna split up your application into small reusable pieces and most pieces,
                most Components indeed will only focus on outputting something, on having some JSX code,
                maybe some transformation logic and maybe some CSS code, but it's only a couple of
                Components which typically manage state.

                And then this state is spread out and distributed through props in the end, like in the
                Expenses Component where we managed to filter state and then we pass the filtered year.
                So the state value through props, back to ExpensesFilter. This is a standard pattern
                which you'll see a lot that you manage state and a couple of Components and then you
                might pass that around to other Components.
            */}
        </p>
    )
}

export default ControlledVsUncontrolledComponentsStatelessVsStatefulComponents;