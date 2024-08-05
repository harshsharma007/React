import React from 'react';

const SettingDynamicInlineStyles = () => {
    return (
        <p>
            {/*
                In this project, we might want to change the way styles are applied because at the moment
                we are using regular CSS with regular CSS selectors, like the class selector. And as I
                mentioned the style even though we're importing it into the CourseGoalList Component
                is not scoped to that Component.

                It would affect any element on the entire page which has a goal-list CSS class. So that's
                one thing we'll tackle but we'll start with something different with setting styles
                dynamically. And a great example can be found in the CourseInput Component. There we are
                collecting some input by the user and then we have the "Add Goal" button to add a goal.

                In the moment, we can press that "Add Goal" button even if we didn't enter anything.
                And the result is that we add an empty element. In most applications, we probably want
                to avoid this and we don't just want to avoid this. We also want to give the user some
                feedback about the incorrect input.

                For this we need to set styles dynamically. In CourseInput Component it's the
                formSubmitHandler where we want to check, whether something valid was entered before
                we triggered that onAddGoal() function. So that function we get on the onAddGoal prop
                to be precise.

                For this we can add a simple if statement in the formSubmitHandler and check if the
                enteredValue.trim().length === 0 we will know that the input is essentially empty. In
                that case I want to return. But the problem is that we don't give a feedback to the user.
                And that's exactly where we now need our styling.

                I want to add a red border and a slightly red background to the input and also the red
                color to the label. If the user enters something invalid, but how can we achieve this?

                We can manage an extra piece of state and that state could be an indicator for whether
                the user submitted and entered something valid or not. Initially we trust the user, so
                we will set it to true and I'll name this state isValid and the updating function
                setIsValid. We can set it's value to false in the if block where we are check the length
                of the text entered.

                If it's false I want to apply styles and the easiest way of doing that is to add the
                inline style for the label and as you learned you need to set an object there. The inline
                style prop here wants an object as a value. And in that object, you target different
                CSS style props in JavaScript that you can set for the element for the Component.

                To set the color property below is the code and the color red will be applied when there
                is something invalid:

                <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>

                If we now submit it without submitting anything the label will turn to red color. We
                also need to apply style for the input element. After apply the CSS to both of the
                elements we need to reset it also when the user types in something.

                But before that take a note that with this approach we currently have here we always set
                inline styles, which has the highest priority in CSS. So you will override all other
                styles with that. I'm happy with the default styles we set up in CourseInput.css. For
                example, for the input we have a border color of #ccc (light gray).

                But still we have some duplication, we got a base color scheme in the CSS file and then
                we override with this inline styles just because we want to conditionally set some
                specific styles if the input is invalid. And that's why I'm not 100% happy with those
                inline styles.

                Let's now work on the reset functionality before I then show you an alternative to setting
                dynamic styles with inline styles. To work on the reset functionality all we have to do
                is to go to the place where we react to every keystroke and in the end we just need to
                check:

                if (event.target.value.trim().length > 0) {
                    setIsValid(true)
                }

                It will work but I am not very much happy with the inline styles because they take a
                very high priority and you can certainly always find ways of making it work. But I
                personally would prefer to not set inline styles.
            */}
        </p>
    )
}

export default SettingDynamicInlineStyles;