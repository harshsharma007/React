import React from 'react';

const RenderingListsOfData = () => {
    return (
        <p>
            {/*
                We got a list of data in our project but that list is static. It's not dynamic at all at
                the moment. For example, if we filter through dropdown this does not affect the list
                at all, and also if we would add a new item, it's not added to the list because we
                haven't added the logic for this yet.

                In the Expenses.js file we currently render our list of expenses by individually adding
                these expense item elements here in our JSX code, and that's of course not dynamic at
                all. In most web applications we don't know in advance how many items we wanna render.
                Therefore, hard coding the number of expense items as we're currently doing it is
                definitely not the way to go.

                Instead we wanna render that list dynamically and doing that as a standard case, which
                you'll face in lot of projects and applications, and it's therefore also straightforward
                to do with React. We wanna render our expenses which are defined in App.js. Here we got
                this expenses array, and we wanna render this in the Expenses Component, therefore, the
                first step is to pass our Expenses down via props, which we're doing already.

                We are passing the items prop, which points at this expenses array. So in the Expenses
                Component, we do get our list of expenses but we're currently not using that, and that's
                what we wanna change. On our props we got this items prop and the value of that will be
                the array, which will be in the end we wanna render dynamically.

                But we don't wanna output the array as text or anything like that. Instead, we wanna
                render one ExpenseItem per element in the array and that's straightforward to do. For
                this, we first of all need single curly braces, because we wanna execute a dynamic
                expression in our JSX code, and you learned that's done with curly braces.

                Then we can execute JavaScript expressions here. The expression which I do want to
                execute here is that I reach out to my array of data, in this case the array of expenses,
                and that then for every element we wanna create such a JSX element. For this we can
                access props.items that's our array of items, our array of expenses and now we can use
                a built in array method, which is built into standard JavaScript and that's the map
                method.

                What this method does is that it creates a new array based on another array, and that
                basically transforms every element in that original array. Map takes a function, which
                we pass as an argument and that function is then executed for every item in the array
                on which we're calling map and the result of this function is the element which will be
                added to the newly created array.

                We can utilize map method to transform our array of objects into an array of JSX elements
                into an array full of ExpenseItem JSX elements because if you do output an array of
                JSX elements here, like a couple of cards, then React is capable of simply rendering
                these elements.

                So if you had something like this:

                {[<Card />, <Card />]}

                an array of JSX elements as part of your JSX code, React would simply render those
                elements side by side and that's what we utilize here to transform our array of objects
                into such an array of ExpenseItems, which are then rendered by React. So map function
                takes a function as an argument and that function executes for every element in the
                array and it gets that element for which it's currently executing as a parameter.

                So here we get our expense, for example, and then in the function body, on the right side
                of the arrow we have to return the JSX element into which we want to map this expense.
                In this case, we want to map every expense in my expenses array, I want to map every
                expense into an ExpenseItem JSX element.

                So, I want to transform the expense object to the special kind of object to the JSX
                element and then we can just configure this as we did it in the manual way. We add a
                title prop, but the title is now expense.title, expense.amount and expense.date. Now,
                we can get rid of the hard code.
            */}
        </p>
    )
}

export default RenderingListsOfData;