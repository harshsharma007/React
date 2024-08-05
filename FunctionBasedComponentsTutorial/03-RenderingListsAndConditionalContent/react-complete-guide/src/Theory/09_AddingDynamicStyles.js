import React from 'react';

const AddingDynamicStyles = () => {
    return (
        <p>
            {/*
                To build the ChartBar Component, we have to define our Component function. For the JSX
                code in the ChartBar, which we return I want to have a div with a className of "chart-bar".
                In there we need to have another nested div with a className of "chart-bar__inner".
                Inside it we will need to add yet another div with a className of "chart-bar__fill" and
                in the next level we need to have a div to contain label.

                <div className="chart-bar">
                    <div className="chart-bar__inner">
                        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
                    </div>
                    <div className="chart-bar__label">{props.label}</div>
                </div>

                These divs would be responsible for rendering the chart correctly. In label div, we can
                dynamically output {props.label} so that the label is visible. We also need to change
                the chart-bar__fill div. This div is required to basically remember by how much this
                ChartBar will be filled.

                One important piece of information is missing in the CSS class and that will be height
                of this chart-bar__fill. The overall ChartBar has a predefined height 100% of the
                parent container which is the Chart.js which has a height of 10rem. But of course, by how
                much we fill that bar depends on the data we're receiving.

                So, it depends on the value because we want to basically fill our ChartBar by putting the
                value in relation with the maxValue. So, that if the maxValue for the entire chart is 100
                and the value for a given ChartBar is 50 we fill that ChartBar by 50%. Therefore, in the
                ChartBar Component we now need to calculate by how much this specific ChartBar instance
                should be filled.

                For this we could add a variable 'barFillHeight' and initially I will set this to '0%'.
                As a text because this will be assigned as a CSS style. Then, I want to check if we got
                props.maxValue > 0, so that for the given dataPoints we do have a max > 0. We could have
                0 later if we filter for a month that has no expenses.

                So, we want to check if we do have a maxValue > 0 then I want to set

                barFillHeight = Math.round((props.value / props.maxValue) * 100)

                This will basically give us the percentage between 0 and 100 by which the bar should be
                filled and I'm rounding to the nearest integer. To convert it to the string just add '%'.
                Now, we want to set this as the height for the div with the 'chart-bar__fill' className.

                To achieve this we are going to do something that we haven't done thus far. We're going
                to set the style of an element dynamically and that can be done by adding the style
                prop, which is of course a default HTML attribute as well but actually that style prop
                works a little bit differently when building a React application.

                The value we here in the tag should be dynamic because it should be our derived fill
                height and indeed you then don't generate a dynamic string where you set something like
                style={'height : 10%'}

                But instead style wants an object. So here we don't have special double curly braces
                syntax but instead we have a single curly braces for outputting something dynamically
                but then the dynamic value is a JavaScript object which is also created with curly braces.
                That's why we overall have the double curly braces but it's no special style syntax.

                The only special thing here is that style wants a JavaScript object as a value. And then
                in this object, you should then use the CSS property names as key names as properties
                and the values as values.

                For example
                style={{'background-color' : 'red'}}

                Or in our case

                style-{{height: barFillHeight}}

                As a side note, if you have something like background-color (with a dash '-') you need
                the quotes around the property name 'background-color' otherwise it would be an invalid
                property name or better you use the camel case version of that name like 
                backgroundColor : 'red'.

                let barFillHeight = '0%';

                if (props.maxValue > 0) {
                    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
                }
            */}
        </p>
    )
}

export default AddingDynamicStyles;