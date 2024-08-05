import React from 'react';

const WrapUpAndNextSteps = () => {
    return (
        <p>
            {/*
                To use the Chart and pass in the dataPoints, I will add a new Component in the Expenses
                Component folder and I'll name it, ExpensesChart.js. In this Component, the goal is to
                return the Chart, so we have to include the reference the to the Chart.js in the newly
                created Component file.

                Now we need to define the dataPoints, which are passed into the Chart because there we
                are referring to the dataPoints prop. To set up the dataPoints in ExpensesChart, I will
                create a const and this will be an array of objects with properties label and value:

                const chartDataPoints = [
                    { label: 'Jan', value: 0 },
                    { label: 'Feb', value: 0 },
                    { label: 'Mar', value: 0 },
                    { label: 'Apr', value: 0 },
                    { label: 'May', value: 0 },
                    { label: 'Jun', value: 0 },
                    { label: 'Jul', value: 0 },
                    { label: 'Aug', value: 0 },
                    { label: 'Sep', value: 0 },
                    { label: 'Oct', value: 0 },
                    { label: 'Nov', value: 0 },
                    { label: 'Dec', value: 0 }
                ]

                Because we expect every dataPoint to be an object. In the Chart.js file, when we map
                through dataPoints we then access values like label and value on the given dataPoint.
                Therefore, we want to have objects and these objects should have a label and value key.
                The value is simply 0 initially for every dataPoint and the label is something like
                Jan for January and so on.

                We don't want to have 0 for every dataPoint, instead now we want to have a look at our
                filteredExpenses and make sure that we basically go through all the Expenses for a
                selected year and that we then sum up the Expenses for all the different months and we
                assign them here in our dataPoints.

                Therefore, I expect to get the filteredExpenses as a prop on my ExpensesChart Component
                because we will use ExpensesChart in the Expenses.js file later and there we have the
                filteredExpenses. Here in the ExpensesChart, I just expect to get that list of expenses.
                Then we can add a for loop where we loop through all our expenses which we get via props.

                Then we want to have a look at every expense get the month of that expense and update the
                value of the appropriate dataPoint by the expense amount. Inside of the loop, we can get
                our expenseMonth by having a look at expense.date.getMonth, date is a date object and
                there we have the build in getMonth() method, which returns us the month starting at 0.
                
                So January is 0 and we can use this month later to pick the right dataPoint, since
                January has the index 0 in the array as well. Basically we can use th month as an index
                in the array later. Now, we have to reach out for chartDataPoints for the given month
                and then we want to update the value of the selected dataPoint by adding expense amount.

                chartDataPoints[expenseMonth].value += expense.amount;

                So that we increase the value of a given month by that expense.amount and we go through
                all expenses to sum up all the expenses for the different months and assign the values
                to the appropriate months, to the appropriate dataPoints. Below is the for loop:

                for (const expense of props.expenses) {
                    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
                    chartDataPoints[expenseMonth].value += expense.amount;
                }

                After this for loop, we still have this array but now the values will not be zero anymore
                but instead they will have the summed up values for the given month expenses. And now
                we can pass these dataPoints to the Chart. There we set the dataPoints prop since that's
                the prop we're expecting their dataPoints and we set this equal to our updated
                chartDataPoints.

                Now, in the Chart.js we also need to calculate the maxValue. So we want to have a look
                at all the months and find the biggest value across all months. Because that's the
                maximum value which should be represented in the chart. To do this, we can add a new:

                const totalMaximum = Math.max()

                To find the maximum value but actually max() wants a number of arguments like this:
                max(1, 2, 3)

                Comma separated arguments, comma separated numbers from which it returns the biggest
                number. Here we have an array and not an array of numbers but an array of objects. And
                we are just interested in a specific property of that object. We can get our 
                dataPointValus array if we want to get values.

                const dataPointValues = props.dataPoints.map();

                We can use the map() method but now we won't map the dataPoints into JSX elements but
                instead simply transformed them from objects to numbers. So that for every dataPoint, we
                in the end just return dataPoint.value. That means we transform a dataPoint object to
                just the number, the number stored in dataPoint value.

                Therefore, map on dataPoints will return a brand new array which is just an array of
                numbers. In our case for the 12 months we'll have an array of 12 values. Now, it's
                dataPointValues where we want to find the maximum but since max() wants a list of
                arguments instead of an array and since dataPointValues is still an array, we can use the
                spread operator to pull out all the array elements and add them as standalone arguments
                to the max() method.

                Now the max() method will receive 12 arguments which are these 12 values from our array
                pulled out by the spread operator. Then we have to pass the totalMaximum to the maxValue
                of the ChartBar.
            */}
        </p>
    )
}

export default WrapUpAndNextSteps;