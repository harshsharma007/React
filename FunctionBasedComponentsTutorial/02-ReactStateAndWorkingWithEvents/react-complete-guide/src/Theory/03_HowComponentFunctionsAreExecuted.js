import React from 'react';

const HowComponentFunctionsAreExecuted = () => {
    return (
        <p>
            {/*
                We want to change the title when the button is clicked. Here's one thing we could do:
                - We could create a variable and holds the value we find in props.
                  let title = props.title
                
                - And then we can use this title variable down in place of {props.title} in JSX code to
                  output the title.
                
                - We can change the value of title in clickHandler to "Update".

                After saving the changes if you go the screen and then click the button we will see
                nothing has happened but in the console, log is printed. So why it's not working? Why 
                don't we see that change reflected in our DOM?

                Because React doesn't work like this. And that's where now I have to dive into how React
                actually parses the JSX code and how it considers that and how it brings it on the
                screen?

                Keeping in mind that our Component is a function. The only special thing about that
                function is that it returns JSX. Since it's a function someone has to call it, and you
                might notice that we never called our Component functions, instead we just use these
                functions like HTML elements in the JSX code.

                The thing is, under the hood this is almost like a function call. By using our Component
                in JSX code, we make React aware of our Component functions. For example, in the code
                below we make React aware of Card function.

                <Card className="expense-item">
                    <ExpenseDate date={props.date} />
                    <div className="expense-item__description">
                        <h2>{props.title}</h2>
                        <div className="expense-item__price">${props.amount}</div>
                    </div>
                    <button onClick={clickHandler}>Change Title</button>
                </Card>

                And whenever React evaluates the JSX code, it will call these Component functions. And
                these Component functions then return JSX code, which is also evaluated up until there's
                no more JSX code to be evaluated.

                So React keeps on calling any Component functions it encounters in JSX, then calls any
                functions that those functions might have returned so any elements those Components
                might have used in their JSX code until there are no more functions left.

                In the case of Expenses.js, if React encounters the ExpenseItem it calls this ExpenseItem
                Component function, executes all the code in there, encounters Card function and
                ExpenseDate function and then it goes through the JSX code of these Components until
                there is no more Component code left to call.

                Then it re-evaluates the overall result and translates that into DOM instructions, which
                renders the result on the screen. It starts with index.js file where we initially
                pointed <App /> Component and that's the first Component function which is being called
                and that happens when the React App is loaded on the screen, which happens when the
                page is visited.

                So that is how React goes through all these Components executes all these Component
                functions and draws something on the screen. The only problem with that is React never
                repeats that.

                React goes through all of that when the application is initially rendered, but thereafter
                it's done. However, in modern applications of course you sometimes want to update what's
                visible on the screen, for example a button was clicked and that button should change
                some text.

                So we need a way of telling React that something changed and a certain Component should
                be re-evaluated and that's where React introduces a special concept called State.
            */}
        </p>
    )
}

export default HowComponentFunctionsAreExecuted;