import React from 'react';

const AddingConditionalReturnStatement = () => {
    return (
        <p>
            {/*
                Before we continue, I want to restructure the Expenses Component a little bit. We can
                extract the list logic into a new Component, so that our Expenses Component becomes a
                little bit leaner. Therefore, we can add a new file with the name ExpensesList.js file
                and also ExpensesList.css file.

                After extracting the logic to the new file we have to make some necessary changes related
                to import and props. In the Expenses.js file we have to call the new Component in place
                where we want it to be rendered and have to pass the filteredExpenses in items props.

                <ExpensesList items={filteredExpenses} />

                IMPORTANT: In ExpenseItem.js file, we have to wrap our Component tree with <li></li>
                tag because we are returning an <ul></ul> list from the ExpensesList.js.
            */}
        </p>
    )
}

export default AddingConditionalReturnStatement;