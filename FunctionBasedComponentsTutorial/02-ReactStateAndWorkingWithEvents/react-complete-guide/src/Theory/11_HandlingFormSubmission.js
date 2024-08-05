import React from 'react';

const HandlingFormSubmission = () => {
    return (
        <p>
            {/*
                To make sure this form is submitted when the button is pressed and then we basically
                gather the different state slices and combine them into one object, which for the moment
                would be logged to the console but we could use it for different things later.

                Therefore, we want to listen to the form being submitted. We could add a onClick()
                listener to the button but this could not be the best way of listening. Because indeed
                there is a default behavior built into the browser and built into forms on web pages.

                If a button, especially with type submit is pressed inside of a form, the overall form
                element will emit an event to which we can listen and that's the submit event. On
                the form, where I want the React to onSubmit and then execute some function whenever
                this form is being submitted.

                Whenever you click Submit button page reloads because the browser automatically sends
                a request wheneve a form is submitted to the server which is hosting the webpage. To 
                prevent the page from being reloading when the Submit button is clicked we have to use 
                event.preventDefault();

                This is built-in JavaScript method nothing React specific this is default JavaScript
                behavior. We can prevent the default of the request being sent and since that request
                is not sent the page will now also not reload because we stay on the currently loaded
                page without sending any request anywhere and we can continue handling this with
                JavaScript.

                We can create our expenseData object and in it we have to combine all that entered data.
                If you use one state instead of three states approach you already have such a combined
                object. But I don't have that here so I will now create it once the form is submitted
                and add three properties (title, amount, date).
            */}
        </p>
    )
}

export default HandlingFormSubmission;