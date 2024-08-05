import React from 'react';

const UseEffectAndDependencies = () => {
    return (
        <p>
            {/*
                Often you need dependencies because you don't just want to run the useEffect function
                once when the App starts up but indeed, after every Component re-evaluation if a certain
                dependency changed. And an example can be found in the Login Component. That's the
                Component where I actually render the Login form.

                As you see, there is actually some validation built-in. If I click in the E-Mail and
                Password textbox they will be marked as red (if I don't enter any value). Also the button
                is only enabled if I have entered something valid in both inputs otherwise the button
                is disabled.

                Currently, the validation works such that for every keystroke on the E-Mail field, the
                emailChangeHandler runs and it sets the form as valid if the email consists of @ symbol
                and the entered password was correct and we got the same for the passwordChangeHandler.
                I also got the validateEmailHandler and validatePasswordHandler, where I set E-Mail and
                Password as valid whenever the input blurs.

                So that they are also marked as invalid if I just click in the textbox and enters nothing
                and leave the textbox. Now where could we use useEffect?

                To restructure our validation logic, instead of having essentially the same logic in
                the emailChangeHandler and passwordChangeHandler, we could use useEffect to have one
                place where we mark the form as valid or invalid with one logic, which should trigger
                whenever either the E-Mail or the Password changed.

                In the useEffect anonymous function, I will call setFormIsValid and I will not use the
                event.target.value, but I will check the:
                
                useEffect(() => {
                    setFormIsVaild(
                        enteredEmail.includes("@") && enteredPassword.trim().length > 6
                    );
                }, [setFormIsVaild, enteredEmail, enteredPassword])

                Like this, this would only run once and that's when this Component first is rendered.
                And if we comment the logic from emailChangeHandler and passwordChangeHandler and
                reloads the project, you will see the button never gets enabled. And the reason for that
                is the useEffect ran only once, when the Component rendered for the first time.

                That was the right behavior of useEffect in our App Component but here in our Login
                Component this is a wrong behavior. We want to re-evaluate the setFormIsValid state
                setting function for every keystroke in E-Mail and Password change handler.

                We could remove the dependencies array (but if we save it, it will crash our webpage).
                This will make sure that this runs whenever the Component was re-evaluated. Therefore,
                effectively in this case it's the same as if we would have moved the setFormIsValid()
                code directly into the Component function itself because now without any dependencies,
                this code re-runs whenever the Component was rendered and since we set state, this would
                trigger a re-render cycle itself hence we would have an infinite loop.

                Saying nothing about the dependencies is not what we want, but no dependencies is also
                what we don't want, then it would only run once. Indeed there is a simple rule, you add
                as dependencies what you're using in your side effect function. In this case, we're
                using setFormIsVaild function, enteredEmail and enteredPassword.

                These are our three things we're using therefore between the square brackets you would
                add setFormIsVaild function, enteredEmail and enteredPassword. Remember not to add
                parenthesis to setFormIsValid because it will execute the function immediately instead
                add a pointer to that function.

                This will tell React that after every Login Component function execution, it will re-run
                the useEffect function but only if either setFormIsValid, or enteredEmail or
                enteredPassword is changed in the last Component re-render cycle. If neither of the
                three changed this effect function will not rerun.

                Actually, you can also omit setFormIsValid because those state updating functions by
                default are insured by React to never change. So these functions will always be the
                same across re-render cycles, so you can omit them. But enteredEmail & enteredPassword
                would change with every keystroke.

                If we now save and try to reload the page you will see the login button still enables
                and disables and the reason for that is that now the useEffect function re-runs whenever
                enteredEmail or enteredPassword changed. So that's another scenario where useEffect
                shines.

                It helps us make sure that we have one code, in one place, instead of as before in
                multiple places which reruns, whenever one of the dependencies changed. And that's also
                something where you use useEffect. So it's not just for when a Component was created
                for the first time, but it's equally common to use it, to rerun logic when certain data,
                typically some state or some props changed.

                One aspect that could be confusing here, is inside of this useEffect example we're not
                working with localStorage. We're not sending an HTTP request, we're not setting a timer
                or anything like that. Instead we are updating the React state and that could be
                confusing. To clear that confusion, you must not forget that it's called useEffect and
                it has one main job it's there to handle side effects.

                And often side effects are HTTP requests and so on but it's also a side effect if we
                listen to every keystroke and save that entered data as we're doing it in the
                emailChangeHandler for example and we then want to trigger another action in response
                to that.

                So checking and updating that form validity, in response to a keystroke in the E-Mail
                or a password field that is also something you could call a side effect. It's a side
                effect of the user entering data. So that's why this should not confuse you. useEffect
                in general, is a super important hook that helps you deal with code that should be
                executed in response to something.

                Something could be the Component being loaded, it could be the E-Mail address being
                updated. It could be anything, whenever you have an action that should be executed in
                response to some other action, that is a side effect and that is where a useEffect
                is able to help you.
            */}
        </p>
    )
}

export default UseEffectAndDependencies;