import React from 'react';

const useReducerAnduseEffect = () => {
    return (
        <p>
            {/*
                We have to do the required changes for the password as well. But you might see potential
                here for using just one reducer function instead of two because it's almost the same.
                The validation logic is different though so that's definitely refactorable but it takes
                a little bit of more work which is why I'm not going to do it here.

                But generally it's not too far off. In addition, and that's the thing that matters more
                the form validity, of course also is a bit related to the input validity because the
                inputs are part of the overall form. So the code we have here is still not optimal
                because we still derive the foreign validity of other state which is still not what we
                want due to the reasons I explained earlier with React scheduling the state updates.

                So we might still refer to an old state that does not change just because the state is
                coming from useReducer setFormIsValid like this still is not optimal. In addition,
                having our state that is split even though it's technically belongs together is also
                not something you might want.

                Now, whether you want this or not is up to you, but the fact that this is not optimal
                is a fact. For this let's comment setFormIsValid again and let's go back to use
                useEffect solution, which actually is a nice solution and update it accordingly. Below
                is the code:

                useEffect(() => {
                    const identifier = setTimeout(() => {
                    console.log('Checking form validity!');
                    setFormIsValid(
                        emailState.isValid && passwordState.isValid
                    )
                    }, 500);

                    return () => {
                    console.log('CleanUp');
                    clearTimeout(identifier)
                    }
                }, [emailState, passwordState]);

                This is a fine way of calling setFormIsValid because since it's now inside of an effect,
                we still refer to our state snapshots but this effect is guaranteed to rerun whenever
                the emailState and passwordState changes. This actually now is an okay way of updating
                a state based on other state because with useEffect we're guaranteed that setFormIsValid
                will run for every state update React performs, which was not the case before where
                maybe the code ran too early, useEffect runs after state updates.

                Still we have a problem, this will now run accordingly and correctly but the problem
                we'll have here is this effect runs too often. This will run whenever the email or the
                passwordState changed. That includes cases where maybe just the value changed, which
                might not be what we want. We only care about the validity.

                It turns out that we updated the validity whenever the value changes as well. But if
                for example the input was valid already and we then add an extra character to the
                password, it doesn't really change. It was valid before with the extra character, it's
                still valid. For example, if I have a password that is valid and if I add one more
                character, it's still valid but our effect will be re-executed.

                That's something we might want to avoid and it re-executes at the moment because our
                dependency is the entire emailState and passwordState not just the validity part of it
                which is actually the part we're interested in. Here, we can use object de-structuring
                same as the array destructuring, to pull out certain properties of objects.
                
                const { isValid: emailIsValid } = emailState
                const { isValid: passwordIsValid } = passwordState

                Example from emailState, we can extract isValid and store it in a new constant of the
                same name. We can use a variation of the object de-structuring syntax, we can add a
                colon whic now won't assign a value because we're not creating an object. We're using
                it on the left side of the equal sign and with the object we assign an alias to
                de-extract that value, to the extracted property.

                So we're pulling out the isValid property but we are storing it in a constant which
                actually could be named emailIsValid. And the same goes for the password. So this is
                an alias assignment not a value assignment because it's part of the object de-structuring
                syntax which is the syntax you're automatically using if you're using those curly braces
                on the left side of the equal sign.

                Now we have the emailIsValid and passwordIsValid constants, which we can use in place of
                our dependencies and also as values in setFormIsValid. The advantage is that since now
                I'm pulling out the isValid state whenever just the value changes and the validity did
                not change, the effect will not rerun.

                You can check it by entering a valid password and after you entered a valid password
                you will notice that effect did not run again. This is an important concept to further
                optimize and to avoid unnecessary effect execution, not just when using it with
                useReducer but also when doing so.

                Another use case could be, if you have props as a dependency for your effect. You don't
                want to rerun the effect whenever props change, you only want to do so when some props
                change, for example, with object de-structing you can get there.
            */}
        </p>
    )
}

export default useReducerAnduseEffect;