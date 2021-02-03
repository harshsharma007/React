import React from 'react';
import CustomPerson from './Person/CustomPerson';

/*
    Persons can be a functional component because I don't plan on managing state in here, though with
    React hooks we could of course do that theoretically but I'll keep that structure where we use class
    based components for state management and functional components for the presentation of content.

    In the below component, if we only want to return something in that function body due to our project
    set up and all the ES6 features we can use the next gen features in general we can use, we can
    shorten to just return parentheses. This is simply due to the way arrow functions work, if you write
    them in one line and this by the way does not mean that you can't split the part inside the
    parentheses across multiple lines but you start with that in the same line, if you only have that
    one line and not multiple lines as a function body, you can simply start with the return statement.
    And, if you return parentheses, this is what we got here since you omit the return statement in
    this one line notation. That's the default ES6 arrow function notation, if it's in one line, this
    automatically gets returned and you can hence omit the return statement.

    One thing to keep in mind while writing the code, we're already writing JSX, so we can even omit
    the parentheses here because we're not having a JSX expression here, this is normal JavaScript
    after all. It will contain JSX in the inside but that doesn't change the fact that props.persons.map
    is normal JavaScript code we're calling.

    One thing we still need to do is, we need to adjust our click and changed handler because 
    deletePersonHandler and nameChangedHandler that won't work anymore because we no longer have these
    methods here, we no longer have a class here, this is just a function. Of course, we could create
    a class here and handle the deletion and so on here but keep in mind this should typically be
    handled in a couple of or very few containers and not in all your components. So the way to handle
    this would be to not call 'this' but props and the name of the property we want to use, like
    props.clicked and props.changed.

    Now, if you use react developer tools and dive into it, you will see that we got our persons
    component here with our all custom person. So it's working as before but we improve the structure
    a little bit because now in the App container, we don't have to worry about the logic of creating
    that list, we outsource this to the persons.js file and it is the best practice to create granular
    pieces where each component has a clear focus.
*/

const persons = props => {
    console.log('[Persons.js] rendering...')
    return props.persons.map((person, index) => {
        return (
            <CustomPerson
                click={() => props.clicked(index)}
                name={person.name} age={person.age} key={person.id}
                changed={(event) => props.changed(event, person.id)} />
        )
    })
}

export default persons;