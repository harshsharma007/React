import React from 'react';

const WorkingWithPortals = () => {
    return (
        <p>
            {/*
                In this project, we have an ErroModal and in this we can use a Portal because this Modal
                actually shouldn't be rendered in the place where it is being rendered. If we inspect
                the DOM that is being rendered and I trigger the Modal by submitting an invalid Form,
                you will see the Modal divs for the Backdrop and for the Card are being rendered next
                to the Card that holds the Form, inside of the root div.

                In this application, because it's so tiny that's actually not too bad. But it's easy to
                imagine that you have an application where your AddUser Component is not that close to
                the top of the whole application but where it's deeply nested in some other Components
                and therefore your Backdrop and your Modal divs would also be deeply nested in some other
                content in your DOM.

                I want the Backdrop and Modal right below the body, as a direct child of the body next
                to the root div which holds the rest of our application. And this is something you can
                achieve using Portals. How do we use Portals?

                Portals need two things. You need a place you want to port the Component to and then you
                need to let the Component know that it should have a portal to that place. To mark that
                place we go into the public folder and there into the HTML file, which is being rendered.
                And there it's common that you add a div with an id, which you will then use to identify
                this place later.

                <div id="backdrop-root"></div>
                <div id="overlay-root"></div>

                And you could create multiple such roots for different kinds of Components that should be
                portaled there and overlay-root will basically hold all kinds of overlays such as Modals,
                site drawers and so on. After doing these changes we have to go back to our Component
                and work on the ErrorModal.

                In the ErrorModal, I will create a new Component with the name Backdrop and I will add
                it in the same file in conjunction with my Modal. But you could also split it in multiple
                Component files, especially if you use Backdrop in conjunction with other Components as
                well. And in Backdrop Component I will return my div with backdrop class.

                const Backdrop = (props) => {
                    return <div className={classes.backdrop} onClick={props.onConfirm} />
                }

                const ModalOverlay = (props) => {
                    return (
                        <Card className={classes.modal}>
                        <header className={classes.header}>
                            <h2>{props.title}</h2>
                        </header>
                        <div className={classes.content}>
                            <p>{props.message}</p>
                        </div>
                        <footer className={classes.actions}>
                            <Button onClick={props.onConfirm}>Okay</Button>
                        </footer>
                        </Card>
                    )
                }

                Now, I will also add ModalOverlay Component here, which get props and there I will return
                the Card. Basically, I have split my Modal into two separate Components now, Backdrop
                and ModalOverlay because that will make working with Portals easier. And in the Fragment
                we can add an expression and have to call a method, which is not defined in React but
                in another library that comes together with React, the ReactDOM library.

                You can imagine React being the library that has all the React features, state management,
                and so on. And ReactDOM uses React to bring that logic and these features into the
                web browser. So to make them compatible to working with the DOM, put in other words,
                the React library itself doesn't care whether you run it in an environment that has a
                DOM or if you would use it to build a native app.

                For example, you can use React Native in conjunction with React, to build native mobile
                apps. So ReactDOM is kind of the adapter for React to the browser and therefore since
                now we're going to Portal something into a different place in the real DOM, we need to
                import from ReactDOM.

                import ReactDOM from 'react-dom';

                And on ReactDOM, you can now call a React.createPortal() method and the createPortal()
                method takes two arguments. The first one is your React node that should be rendered
                and here I can render my <Backdrop />. So, the first argument takes JSX so you don't
                parse just Backdrop like:

                {ReactDOM.createPortal(Backdrop)}       -> Wrong

                {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />)}   -> Right

                This would also allows me to forward onConfirm prop and get access to props.onConfirm,
                which I need to parse to ensure that everything still works.

                The second argument of createPortal is a pointer to that container in the real DOM where
                the element should be rendered. In our case, I want to render my Backdrop in the
                backdrop-root Component. So in ErrorModal, we select the element where it should be
                rendered to and for this we use the DOM API.

                We use an API that is provided by the browser: document.getElementById('backdrop-root');

                {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, 
                    document.getElementById('backdrop-root'))};
                
                document.getElementById() has nothing to do with React, we really get access to a real
                DOM element with this API. Normally, we don't use this in React because we let React
                do everything but here we explicitly need to use this.

                By the way, just as we need it an element selected like this in index.js, there we also
                rendered the root Component with the render method into a place selected with
                getElementById. We're using the same logic now but now we're not rendering an element
                there but instead inside of an existing application, which is already being rendered
                by React, we Portal.

                We move the HTML content that is about to be rendered into a different place. If I save
                and reloads the page and click on the Add User button, you'll see the Backdrop appears.
                The Modal does not because I haven't added the logic for this yet but the Backdrop does.
                And in the Element tab, we see that in the backdrop-root we now got the Backdrop and
                now it will always be there, no matter where you would use your ErrorModal in your JSX
                code.

                No matter how deeply nested it is in other elements, it will always be here (under the
                body section) which is very close to the body. Let's repeat for the actual overlay.
                For that we need to add a new expression with the same logic. If we now save the changes
                and reloads the project we will see the Modal and it will work fine as expected.

                So that's the Portal and the idea really just is that the rendered HTML content is moved
                somewhere else. In your JSX code, you now use that ErrorModal just as you did before,
                nothing changed there. In AddUser, I still have my ErrorModal but it's now rendered in 
                a different place.

                We use that ErrorModal just as we used it before and that's the cool thing about the
                Portal. Nothing changes there, we can communicate with it as we did before, we can use
                it as if it would be rendered here. It just isn't.

                Also worth a note, ReactDOM.createPortal can be used anywhere where you would otherwise
                use JSX code. Of course wrapped in curly braces because we're calling JavaScript code
                here, but we could have rendered the Backdrop otherwise. That would have been an our
                alternative.

                So wherever you would normally have used the Component, you can use createPortal to portal
                to move that Component's HTML content somewhere else, only in the actual DOM that is
                being rendered. In JSX, in your Components, you continue working with those Components
                as you did before.
            */}
        </p>
    )
}

export default WorkingWithPortals;