import React from 'react';

const StyledComponentsAndMediaQueries = () => {
    return (
        <p>
            {/*
                There is one last thing, I want to cover when we talk about styling and that will be
                media queries. Media queries, of course, often are important to get the right look. At
                the moment, if we preview our application in a mobile device, our application looks good.
                Nothing is going beyond the edges, so that looks okay.

                But maybe we want to make sure that this button actually spans the entire width, if we're
                on a small device and only takes the space it needs if we're not on a mobile device.
                And that would be a scenario where we might want to use a media query. To apply a media
                query, let's go back to Button.js and can add a media query here when we are using a
                Styled Components?

                We just have to add our media query like below:

                @media (min-width: 768px) {
                    width: auto;
                }

                And in this query, we just need to put the styles into that media query that should
                affect this element when that condition here is met. That's all, you need no selector
                in there, nothing else, just the styles that should be applied to the Component, if the
                condition for the media query is met.

                The default width, if the media query is not met can be set to 100% and as a result if
                we save this we have that big button on mobile but if I go to a bigger screen, you see
                now the button only takes as much space as it needs.

                So this is the media query in action and it's in action with the help of Style Components.
                Style Components is definitely a nice package for styling Components and ensuring that
                Components really only affect the styles on which you set them up.
            */}
        </p>
    )
}

export default StyledComponentsAndMediaQueries;