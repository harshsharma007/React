import React from 'react';

const UsingStatefulLists = () => {
    return (
        <p>
            {/*
                How could we now update the expenses array whenever a new expense is being added?
                For this, we need to go to App.js because that is where we have this expenses array.
                There, we also have the addExpenseHandler function, which is triggered whenever a new
                expense is added. And we even received the expense as a parameter here.

                So all we got to do is we have to add the expense to the expenses array. But, if we edit
                it like this nothing would happen because you already learned that just because you
                change some variable, React won't update the Component. Instead to achieve that, you
                need to useState. Therefore, in App.js where we manage our expenses, we now want to
                import useState from React so that we can register some state.

                I will grab the expenses array and extract it out of this Component function and instead
                store it there and rename it DUMMY_EXPENSES. And inside of the App Component function
                we call useState and I'll pass my DUMMY_EXPENSES, so this array full of dummy data as
                an initial state value so that we have some initial expenses to display.

                We can use de-structing to get access to our expenses and to setExpenses state updating
                function. After this, in addExpenseHandler where we want to add a new expense, we can
                call setExpenses to set our expenses array to a new array which includes this new
                expense. So how should we udpate this?

                We could pass a new array here in the setExpenses and then let's say we want to add the
                new expense as the first item in the array. For that we could add the expense which we're
                getting here in the addExpenseHandler as an item to this array and then use the spread
                operator on the existing expenses to pull out all the existing array elements and populate
                the rest of this new array with those existing elements.

                We can use the spread operator not just on objects but also on arrays. However, if we
                would update the state like this:

                const addExpenseHandler = expense => {
                    setExpenses([expense, ...expenses])
                }

                It would not really be correct as you learned in the last core section. Instead, if you
                update your state depending on the previous state or the previous snapshot of this state,
                you should use this special function form for this state updating function.

                So we pass a function as an argument to the state updating function and that function
                will automatically receive the latest state snapshot. So here we would then get our
                previous expenses automatically by React and we would return our new array where we add
                the expense which we're getting as a parameter and we then add previousExpenses with
                the spread operator.

                const addExpenseHandler = expense => {
                    setExpenses(prevExpenses => {
                    return [expense, ...prevExpenses]
                    })
                }

                That's the clean way of updating our state when it's based on an older snapshot of that
                same state. This is now a truly dynamic list by using state and by outputting the items
                with the map method.
            */}
        </p>
    )
}

export default UsingStatefulLists