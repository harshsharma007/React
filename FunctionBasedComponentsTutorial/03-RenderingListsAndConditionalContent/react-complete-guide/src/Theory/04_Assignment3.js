import React from 'react';

const Assignment3 = () => {
    return (
        <p>
            {/*
                Have a look at the ExpensesFilter Component, it is a controlled Component as you've
                learned and it is controlled by the Expenses.js file. There we have our ExpensesFilter
                and list of ExpenseItem. Here we also have the currently selected filteredYear. Good
                way of filtering expenses would be to filter the props.items, which is our array of
                expenses based on the filteredYear.

                We don't need to change some state because we are already receiving props.items. In
                Expenses.js we can simply create a const with filteredExpenses name and on props.items
                call the filter method. We pass a function to it and if this function returns true, a
                certain item is kept and if returns false it is not kept.

                filter returns the new array, it does not edits the original array and in that new array
                we either keep or remove new items. But the original array is not touched and that's
                important because we don't want to loose data just because we filtered.

                const filteredExpenses = props.items.filter(expense => {
                    return expense.date.getFullYear().toString() === filteredYear
                })
            */}
        </p>
    )
}

export default Assignment3;