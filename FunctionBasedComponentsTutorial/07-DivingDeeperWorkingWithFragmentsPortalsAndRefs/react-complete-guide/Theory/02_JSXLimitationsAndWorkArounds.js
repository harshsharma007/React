import React from 'react';

const JSXLimitationsAndWorkArounds = () => {
    return (
        <p>
            {/*
                In React we're working with JSX. We work with JSX all the time in this course and in the
                last project also we used JSX. JSX is that code you return in your Components, which
                in the end will be rendered to the real DOM by a React. That's what JSX is and we use it
                all the time.

                But JSX has certain limitations, specifically there is one limitation which we also has
                already faced in the course. If we have an adjacent root level JSX elements like in the
                example below, we'll get an error. And with root level, we have two JSX elements next
                to each other not wrapped by another JSX element.

                return (
                    <h2>Hi there~</h2>
                    <p>This does not work!</p>
                );

                And we then return these side by side JSX elements or we try to store them in variables.
                This will not work because in React in JSX in general you can't have more than one root
                JSX element. So if you return a value or if you store a value in a variable or in a
                constant or in a property that value must only be exactly one JSX element not two or
                three or four side by side adjacent elements.

                Now that one element which you are allowed to have may of course have more children which
                then also can be adjacent to each other. But that top most element which you're storing
                or returning must only be one element. And the reason for that is because this isn't
                valid JavaScript.

                return (
                    React.createElement('h2', {}, 'Hi there!')
                    React.createElement('p', {}, 'This does not work')
                )

                You can't return more than one thing in JavaScript either you can return one number
                not two, you can return one string not two. Of course, you could return an array and
                there you could have multiple numbers but an array is already a new value. An array is
                just an object so you still only return one array, not two arrays at the same time.

                So that is really important to understand your JSX code translates into 
                React.createElement like you see above. And you must only have one React.createElement()
                call which you return. Any nested JSX elements inside of that one root element could be
                side by side because in the React.createElement world those children of the root element
                would be the third and fifth and so on argument.

                And that's something I had a closer look at in the basics module where we explored how
                JSX translates into React.createElement calls. But because of that natural limitation
                of JavaScript we must only have one root JSX element. How can we work around that?

                There is one solution and actually we can already use that solution here, in the AddUser
                Component. Here we do have a wrapping div and that is a workaround. You can solve this
                problem by simply wrapping the adjacent elements with a div. If you wrap them with a
                div then you only have one thing that you return only one value.

                It's bit like returning free numbers by putting them into an array. Here we're returning
                two nested JSX elements by putting them into one div which we return. This doesn't have
                to be a div you could be using any element here you could also be using a custom
                Component here. The main thing that matters is that you only have one value which you
                return or which you store in a constant.

                return (
                    <h2>Hi there~</h2>
                    <p>This does not work!</p>
                );

                That's what we are doing in AddUser Component. There also is an alternative to that
                instead of using a div we could use a native JavaScript array. I could remove my opening
                and closing div tags and put my Card Component here and that dynamic expression into
                an array separated by commas.

                return (
                [
                    error && (
                        <ErrorModal
                        key="error-modal"
                        title={error.title}
                        message={error.message}
                        onConfirm={errorHandler}
                        />
                    ),
                    <Card key="add-user-card" className={classes.input}>
                        <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={enteredUsername}
                            onChange={usernameChangeHandler}
                        />
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="age"
                            type="number"
                            value={enteredAge}
                            onChange={ageChangeHandler}
                        />
                        <Button type="submit">Add User</Button>
                        </form>
                    </Card>
                ]

                That would be valid but this has a little gotcha. We can return an array because React
                is able to work with arrays of JSX elements. We did utilize that when we output our list
                of users. React knows how to work with a raise of JSX elements and hence of course here
                we could also return such an array of JSX elements.

                If we do that and we preview this application we do get a warning though because whenever
                you're working with an array of JSX elements React wants a key on every element. And
                that's no exception here, it wants that key if you map dynamically through a list of data
                and map that data to JSX elements but it also wants such a key if you have a hard-coded
                array of JSX elements as we have it here.

                Of course we can add a key and since this is not generated dynamically we can hard-code
                keys here, "error-modal" and "add-user-card" for example. We could add the key prop with
                our own invented values and we would be fine. And that would be perfectly fine but
                typically you don't use this solution because adding those keys wrapping it in an array
                is a little bit cumbersome.

                It's way easier to simply add a wrapping div here like we had it before. So it's more
                convenient and therefore typically we use the wrapping div. However, with the wrapping
                div or generall any wrapping element a new problem arises. Now, we can end up with div
                soup. So we can end up with a real DOM that's being rendered where you have many nested
                React Components and all those Components for various reasons need wrapping divs or other
                wrapping Components.

                <div>
                    <div>
                        <div>
                            <div>
                                <h2>Some content - yeah, this can really happen.</h2>
                            </div>
                        </div>
                    </div>
                </div>

                And you have all these unnecessary divs being rendered in the real DOM even though they're
                only there because of the requirement or the limitation of JSX. And this is not an
                unrealistic scenario.

                In bigger applications, it's very possible that in your final HTML page, which is being
                served to your end users you have a lot of unnecessary divs or other elements, which are
                only there because you needed them as wrappers even though they don't add any semantic
                or structural meaning to your page.

                Of course, you don't have to care about that you might be fine with that but it could
                break your styling. If you have a wrapping div somewhere and you use nested CSS selectors
                that div could break stylings. And even if it doesn't break your styling it's still
                not a good practice.

                You're rendering too many HTML elements and ultimately that also makes your application
                slower because the browser needs to render all those elements and React needs to check
                all those elements or at least some of those elements if content needs to change. So
                rendering unnecessary content is generally never a good idea in programming.

                Hence this wrapping div or the wrapping element approach is okay but not ideal.
            */}
        </p>
    )
}

export default JSXLimitationsAndWorkArounds;