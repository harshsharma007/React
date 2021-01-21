import React from 'react';
import styled from 'styled-components';

/*
    styled object which we're importing from styled component has a method for every html element you 
    can create eg. div, button, anchor and all of them.

    We need to add CSS styles inside the two backticks. We can also add media query here just with the 
    property. Styled Components will make sure that these styles including the media query end up on 
    this div.

    Every method provided by this styled object no matter if that's div, h1 or anything returns a react
    component. Here we are not creating a react component where we get props and returns JSX, No.
    Because this already returns our React component so this already is a functional or class based
    component.

    Instead of creating a function here a functional component we just stored the result of this method
    call in our StyledDiv const because this already is a valid react component provided by the third
    party library.

    More on Styled Components
    How do Styled Components work?
    If you inspect an element in the development tool, we see there that rendered divs have attached
    CSS classes to them. Classes with strange names which we certainly didn't define these class names
    are automatically added by the styled components library because keep in mind that these divs here
    are actually the output of the div method below. We are not rendering a div we are rendering a
    style which is the result of calling the div method here in the end with this tact template notation.

    So this div method returns a react component which in the end renders a regular div with such a CSS
    class. Where is the content of this class coming from? We can see that in the head of this document
    there we will see a style tag or multiple style tags. And if we have a look at these style tags
    specifically with a data-styled attribute, we will see there's strange class name again. And there
    we find the styles we set up in our code. So the styles we set up here are not added as inline styles
    but instead the style components package takes them puts them in to CSS class selectors and adds
    them to the head of document and then just adds the appropriate CSS class to the div which is
    returned by styled.div component or which is created as part of this component. This is how styled
    components work under the hood which is great because that means you're not working with inline
    styles which can have certain disadvantages. For example, you're not really taking advantage of the
    cascading nature of CSS with them. Instead you have regular CSS classes automatically managed for
    you by style components which makes this a really great solution.
*/

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px): {
        width: '450px'
    }
`

const customPerson = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default customPerson