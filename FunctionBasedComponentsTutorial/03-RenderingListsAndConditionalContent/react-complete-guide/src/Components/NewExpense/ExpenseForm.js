import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /*
        // Setting state in single useState
        const [userInput, setUserInput] = useState({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)

        /*
            // Setting state in single useState <- Approach 1
            setUserInput({
                ...userInput,
                setEnteredTitle: event.target.value
            })
        */

        /*
            // Updating state on the previous state with arrow function <- Approach 2
            setUserInput((prevState) => {
                return { ...prevState, enteredTitle: event.target.value }
            })
        */
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

        /*
            // Setting state in single useState <- Approach 1
            setUserInput({
                ...userInput,
                setEnteredAmount: event.target.value
            })
        */

        /*
            // Updating state on the previous state with arrow function <- Approach 2
            setUserInput((prevState) => {
                return { ...prevState, enteredAmount: event.target.value }
            })
        */
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)

        /*
            // Setting state in single useState <- Approach 1
            setUserInput({
                ...userInput,
                setEnteredDate: event.target.value
            })
        */

        /*
            // Updating state on the previous state with arrow function <- Approach 2
            setUserInput((prevState) => {
                return { ...prevState, enteredDate: event.target.value }
            })
        */
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}
                        value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}
                        value={enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;