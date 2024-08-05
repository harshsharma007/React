import React from 'react';

const ChildToParentComponentCommunication = () => {
    return (
        <p>
            {/*
                Technically, we don't need the title, amount and date data in ExpenseForm.js Component.
                Instead we need it in the NewExpense.js or to be precise in the App.js Component.
                Because there we have our expenses array and ultimately our goal will be to add the
                NewExpense, which the user has entered to the list of existing expenses and we probably
                also wanna enrich it by adding ID.

                So, we need to pass the data which we're collecting and generating in ExpenseForm to
                the App Component. Till now we have only learned how to pass data down with the help of
                props. How can we pass the data from bottom to top? I.e. from child to parent. Well,
                we already saw how it works but it's easy to miss it. Let me show it to you again.

                In ExpenseForm, we are listening to user input to changes in the title input. Whenever
                the user types there, the function titleChangeHandler executes and there we get this
                default event object, that's something the browser gives us. Now, actually we can think
                about this input element as a Component as well.

                It's not one of our Components but it is simply a pre-built Component, provided to us by
                React and of course translate it to the input DOM element and it has the Component
                character in the end. We do also set some props on that Component including the special
                onChange prop.

                The onChange prop isn't that special, it's just a prop named onChange which wants a
                function as a value and then internally the input element adds this event listener. So
                React basically sees that we set a value on the onChange prop and adds that listener
                on the rendered input element.

                But that is a pattern we can replicate for our own Components as well. We can create our
                own event props, and we can expect functions as values and that would allow us to pass
                a function from a parent Component to a child Component and then call that function
                inside of the child Component.

                And when we then call a function, we can of course pass data to that function as a
                parameter and that's how we can communicate up from child to parent. As an example, let's
                say we want to pass the ExpenseData which we gather in the ExpenseForm Component to the
                NewExpense Component as a first step because if we ultimately wanna reach the App
                Component, we first have to reach the NewExpense Component because it's the NewExpense
                Component which uses the ExpenseForm.

                In a second step, it's the App Component which uses the NewExpense Component but we can't
                skip Components in between. Props can only be passed from parent to child, we can't
                skip intermediate Components.

                So firstly, let's make sure we can pass the ExpenseData to NewExpense and we can do this
                by adding a new prop to ExpenseForm with the name onSaveExpenseData. I am naming this
                with "on" because I want to make it clear that the value for this prop should be a
                function, which will eventually be triggered when something happens inside of this
                Component.

                In this case, when the user saves the entered Expense data, so when the form is submitted
                in the end. In NewExpense.js, we have to define a function (as we did for input elements).
                Let's add a function with the name saveExpenseDataHandler and expect enteredExpenseData
                as a parameter. Below is the definition for it:

                const saveExpenseDataHandler = (enteredExpenseData) => {
                    const expenseData = {
                        ...enteredExpenseData,
                        id: Math.random().toString()
                    }
                    console.log(expenseData)
                }

                After writing this function we can add a reference to our custom Component as below:

                onSaveExpenseData = {saveExpenseDataHandler}

                The second step is to use this function inside of our custom Component. That's a step
                we didn't have to do for the inputs because they are built in Components basically, but
                there also we pass a function to onChange and internally React will add a listener and
                call this function which we pass in whenever that event occurs (change event).

                Since we're doing this on our own custom Component, we also have to call the passed in
                function manually. So inside of ExpenseForm, we now can expect the onSaveExpenseData
                prop because I'm setting it when I used the ExpenseForm Component. Hence, inside of
                ExpenseForm we can extract the value passed for the prop i.e. this function.

                Inside of ExpenseForm, we now expect to get some props becase we're setting a prop now
                and now, inside of the submitHandler instead of logging my ExpenseData, I will access
                props onSaveExpenseData and executed here.

                I can execute it because the value which we get on the onSaveExpenseData will be a
                function. We are passing in a function, so it's this function defined in the NewExpense
                Component, which we will now execute in a different Component, inside of ExpenseForm
                to be precise.

                And we can execute the function even though it's not defined inside of the ExpenseForm
                because we are passing a pointer through the onSaveExpenseData prop. And this is a
                super important pattern which you will use a lot in React. This is how you can
                communicate between Components and how you can communicate up, how you can make sure
                that a child Component, in the ExpenseForm Component can communicate up to the parent
                Component, the NewExpense Component in this case.

                We can call a function in NewExpense Component and we can pass data as a parameter. Here,
                when we call onSaveExpenseData in the ExpenseForm, I can pass the ExpenseData which
                I generate here as our argument and that's the value which we'll receive as a parameter
                here in NewExpense.

                And in the similar way, we can communicate from NewExpense to App. Because it is the
                App Component which needs the NewExpense to add it in the expenses array.
            */}
        </p>
    )
}

export default ChildToParentComponentCommunication;