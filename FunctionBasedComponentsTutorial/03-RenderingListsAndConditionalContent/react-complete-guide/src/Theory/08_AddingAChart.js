import React from 'react';

const AddingAChart = () => {
    return (
        <p>
            {/*
                The Expense Tracker has taken some shape and it's basically finished from the core
                functionality, we got all the core features implemented. We can add expenses, we can
                filter our expenses. But if you remember the original state there is one crucial element
                and feature which is missing.

                The chart where we can actually see a graphical representation of our expenses per month.
                And that is therefore what we're going to dive into to then conclude this module and
                this first course project. For this chart, I will start by adding a new Components
                folder which I'll name chart because it will hold all the Components that are related
                to the chart and I will split up the chart into two main Components.

                One is the chart itself, the chart Component which we can add to our application but
                then inside of the chart we have all the bars and I will actually create Component for
                those, the ChartBar.js Component. So we have these two Components and we're also going
                to have some styles, so I will add a Chart.css and ChartBar.css.

                In Chart.js file, we want to render all the Chart bars and the question is now, how we
                could do that? How should we structure the JSX code in this Component and how that all
                should work?

                Eventually, we have to import ChartBar Component, at the moment it's empty but we're
                soon going to add something there. In the end, I want to return some JSX code where we
                have all these Chart bars. First, we have to create a div and inside of a div we need to
                have bars and we could simply render 12 individual ChartBars for the 12 months which we
                have.

                But I will actually create a bit of a more flexible chart, which is actually not
                necessarily restricted to months and to 12 data points. Instead, we could say that when
                the chart Component is being used somewhere in our application, we want to receive the
                data points that should be plotted as props.

                So that the Chart Component is fairly configurable and the Components that use the Chart
                Component can decide how many data points with which values should be rendered. Therefore,
                I will output the ChartBars dynamically by going through an array of data points and
                mapping every data point to a ChartBar.

                And, that basically what we have learned in this module how we output lists of contents
                dynamically and that's also why I'm doing it here so that we again practice this.

                So that we create as many ChartBar Components as we have dataPoints. Then of course, we
                want to pass some data into the ChartBar to control how it will be rendered. For that
                we want to extract some data from the incoming dataPoints.

                Up to this point we're never using the Chart Component so we as the creator of this
                Component can define which kind of data we expect to extract there in the future. For
                example, we could say ChartBar Component should receive a value prop and there we want
                to pass {dataPoint.value}.

                When we define the dataPoints then make sure that every dataPoint has a value property.
                I also want to make sure that every ChartBar plots the value in relation to the maximum
                value in the entire chart. Therefore, I also want to pass in a maxValue property and
                currently we will set it to null. That's not data which we extract from the dataPoint
                because that is a unique value which is the same for all ChartBars in a given chart.

                So, we will need to drive this maxValue. We probably also want to have a label for
                example, in this case to have a label of January, February, March and so on. Therefore,
                I will add a label prop and pass in {dataPoint.label}. Since, we are outputting a list
                so we should also output a key because you learned that key is a special prop helps
                React render these list items efficiently.
            */}
        </p>
    )
}

export default AddingAChart