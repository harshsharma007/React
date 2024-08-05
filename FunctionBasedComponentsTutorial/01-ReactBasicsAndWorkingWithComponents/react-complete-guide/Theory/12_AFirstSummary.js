import { React } from 'react';

const AFirstSummary = () => {
    return (
        <p>
            {/*
                This section was all about Components. It was about understanding the most important
                concept of React that you build user interfaces by building and combining Components.

                With all these Components, which we are building in the end we're just splitting up our
                code across multiple files and building blocks so that if we want to have more than one
                ExpenseItem, we can just use our custom ExpenseItem Component multiple times instead of
                repeating all the code multiple times, that's the idea behind Components.

                In the end, what ends up on the screen are just default HTML elements. If you inspect
                your page with the developer tools, you will notice that you don't see your custom
                Components here, there is no card or ExpenseItem Component, you just see divs and H2
                element and so on.

                And that is how the web works and how React works. These custom Components are not really
                HTML elements, which end up on the screen, you just use them in your React JSX code.
                What ends up on the screen are just the HTML elements because every custom Component
                you build either uses these built in HTML elements or it uses another Component, which
                at some point (if you drill into your Components deeply enough) will end up using these
                built in elements.
            */}
        </p>
    )
}

export default AFirstSummary;