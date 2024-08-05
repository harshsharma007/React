import React from 'react';

const StyledComponentsAndDynamicProps = () => {
    return (
        <p>
            {/*
                Styled Components can be very useful but can we also use them for our div?

                The answer is absolutely. If we want a Styled Component which we really only use in the
                file, we can also create it in that file. We can also create a brand new file as we did
                it for the button. But even though we're only using the button here in this app, you
                could argue that a Button is a Component you might be using in a lot of other places of
                the app as well.

                Now for the div, that might also be the case maybe you have other form inputs in other
                parts of the app as well. But to also show you that you can have multiple Components
                per file and that this might make sense if a Component is really only getting used in
                that file, I will now create a brand new Component in the CourseInput.js file.

                Thus far, we always had one Component per file, and that generally is a good rule to
                keep. But if you have a Component that is really only getting used by the other Component
                in that file, having both Components in the same file can make sense too. Below is the
                code for other Component we can create:

                const FormControl = styled.div`
                    margin: 0.5rem 0;

                    & label {
                        font-weight: bold;
                        display: block;
                        margin-bottom: 0.5rem;
                    }

                    & input {
                        display: block;
                        width: 100%;
                        border: 1px solid #ccc;
                        font: inherit;
                        line-height: 1.5rem;
                        padding: 0 0.25rem;
                    }

                    & input:focus {
                        outline: none;
                        background: #fad0ec;
                        border-color: #8b005d;
                    }

                    &.invalid input {
                        border-color: red;
                        background: #ffd7d7;
                    }

                    &.invalid label {
                        color: red;
                    }
                `

                Just as before, we have to get rid of the selectors and use the & in place of pseudo
                selectors. & (And) tells Styled Components I'm now talking about labels inside of the
                div so that AND always refers back to that Component which is being created. And if you
                then want to have nested selectors you want to target, that is how you do it.

                Now, we can use the <FormControl> tag in place of a div. If we save that it will work
                and you will see (in developer tools) that on div we will have unique classes. But you
                will see if you Submit this empty form we will not get the error state. Of course, this
                can't work because we're no longer setting the invalid class here.

                And we need that invalid class in our rules. The good thing is that the Styled Components,
                the Components returned by these Styled Components functions, forward all props you
                set on them to the underlying Components (to the underlying div). So, we can still add
                a className and the value we need to pass is either an empty string or invalid.

                <FormControl className={!isValid && 'invalid'}

                && this syntax, I otherwise add nothing which is perfectly fine because I need no other
                clause, if it is valid. But if it is invalid, the invalid class is getting added. With
                that we will have the same behavior. That however is the only one way of doing this.

                We can also utilize another feature provided by Styled Components. You can also add props
                to your Styled Components and utlize those props inside of these backticks, inside of
                your styles to easily change styles dynamically. How does this work?

                On our FormControl, we want to add an invalid prop and this should be true or false. The
                value we feed in therefore is !isValid. So if isValid is true, we feed in false because
                it's not invalid, if isValid is true. If isValid is false, we feed in true because
                invalid is true if isValid is false.

                <FormControl invalid={!isValid}>

                So we set invalid to true if what the user entered was invalid and this invalid prop
                can now be used between those backticks. How do we use it?

                We wanted to change the border color of the input, so we go to the place where we set
                up the border color. And there, since we're between backticks you can use the $ sign,
                curly braces syntax. In curly braces, you pass in an arrow function which receive props
                as a parameter, and then should return the text that should be returned in this exact
                position.

                The function will be called by the Styled Components package and for props it will feed
                in all the props your Component gets, in this case the invalid prop. Below is the
                condition:

                border: 1px solid ${props => props.invalid ? 'red' : '#ccc'}

                With that we're having the dynamic way of changing parts of the styles bases on some
                props that are passed to our Styled Component. After that we can remove the below
                selectors:

                &.invalid input and &.invalid label (Check CourseInput.css for the definition). After
                changing and saving the file we will get the same exact behavior as before. But now by
                utilizing Styled Components only and by utilizing this feature of dynamically changing
                parts of the styles based on the props that are set on your Styled Component.

                This sometimes can be hard to get into this way of thinking but it's also a pretty nice
                way of working with Components and Styles.
            */}
        </p>
    )
}

export default StyledComponentsAndDynamicProps;