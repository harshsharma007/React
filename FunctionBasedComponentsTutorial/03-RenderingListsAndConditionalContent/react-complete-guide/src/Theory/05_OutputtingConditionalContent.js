import React from 'react';

const OutputtingConditionalContent = () => {
    return (
        <p>
            {/*
                Where we have no data there we might want to show an appropriate message and that leads
                us to the conditional content. Conditional content is about rendering different output
                under different conditions. In Expenses.js, we render our list of ExpenseItem but if our
                filtered expenses array turns out to be empty, we render nothing.

                We might want to render a message telling the user that we have no items for the choosen
                filter. For that we want to render content conditionally. How can we do that?

                We can add a dynamic expression in our JSX code and simply use a condition. I am not
                talking about the if condition because long statements (the same is true for for loops)
                are actually not allowed between the curly braces, but we can use a ternary expression.
                
                {filteredExpenses.length === 0 ? <p>No expenses found.</p> : 
                    filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} 
                                    title={expense.title} 
                                    amount={expense.amount} 
                                    date={expense.date} />
                ))}

                This is the default JavaScript ternary expression. Of course, long ternary expressions
                like this can be a bit hard to read though. So we can fine-tune this or restructure this
                and reuse the condition by abuse a little trick in JavaScript. We can add the && operator
                and then use the JSX content we want to render if the condition is met.

                {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length === 0 && filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} 
                                    title={expense.title} 
                                    amount={expense.amount} 
                                    date={expense.date} />
                ))}

                JavaScript works such that if you use the && operator, it basically will return the part
                after end && operator as a result of the overall check. If the first condition is met,
                it moves on to the part after the && operator and it then returns that value. That's
                what we're abusing here. Abusing sounds like a bad thing, this is actually something
                which is fine to use, you'll see in a lot of React projects.

                It simply allows you to write shorter expressions. Basically, we split long ternary
                expression into two stand alone expressions, which check different conditions. Using the
                && trick, where the part after && is rendered if the part before && returns true. That
                might be too much logic in the JSX code, so we got an alternative way of handling it.

                We can add a variable expensesContent and we assign a default value which states
                <p>No expenses found.</p> and we can store JSX content like this in a variable. We can
                return it and we can also use it anywhere else where we work with values. Why are we
                storing a JSX in a variable?

                Because now we can add a if check where we can check
                
                let expensesContent = <p>No expenses found.</p>
                if (filteredExpenses.length > 0) {
                    expensesContent = filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} 
                                title={expense.title} 
                                amount={expense.amount} 
                                date={expense.date} />
                    ))
                }

                And, in our returned JSX code we can get rid of all the logic and we can just add a
                simple dynamic expression where we point at expensesContent. So, we got a lean JSX
                snippet which we return, and we got our logic in the Component function itself. And,
                we could argue that this code is more readable.

                In Expenses.js file:

                return (
                    <Card className="expenses">
                    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                    {expensesContent}
                    </Card>
                );
            */}
        </p>
    )
}

export default OutputtingConditionalContent