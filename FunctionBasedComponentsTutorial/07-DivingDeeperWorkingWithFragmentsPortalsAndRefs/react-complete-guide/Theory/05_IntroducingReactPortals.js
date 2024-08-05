import React from 'react';

const IntroducingReactPortals = () => {
    return (
        <p>
            {/*
                Fragments allow us to write cleaner code, to end up with less unnecessary HTML elements
                on the final page. React Portals are another useful feature, which do something similar,
                which also help us write cleaner code. Consider the below example:

                Place 1.
                return (
                    <React.Fragment>
                        <MyModal />
                        <MyInputForm />
                    </React.Fragment>
                );

                We got two elements, two Components side by side, MyModal and MyInputForm wrapped by a
                Fragment. But the Fragment won't matter here we already learned about that. And the
                actual content that ends up in the real DOM, might look something like this:

                Place 2.
                <section>
                    <h2>Some other content</h2>
                    <div class="my-modal">
                        <h2>A Modal Title!</h2>
                    </div>
                    <form>
                        <label>Username</label>
                        <input type="text" />
                    </form>
                </section>

                We might have a section and h2 tag coming from some other Components, because the code
                in the Place 1 is just one of many Components in our application, let's say. Then we
                have the Modal, which is being rendered to the DOM in the end by React and the other
                part is my form. Now what's wrong with that?

                Technically, it is fine but there is something in this code which is not ideal. And that
                would be the Modal. The Modal code, which is being rendered in the DOM will technically
                work, as long as you apply the correct styling, it will look like a Modal. But 
                semantically and from a, "have a clean HTML structure" perspective this is not ideal. Why?

                Because you have to keep in mind, that a Modal basically is an overlay on your page. It
                is an overlay to the entire page. So logically, it's above everything else. And if it's
                then nested in some other HTML code, it might technically work because of styling, but
                it's not good code and it's not a good structure.

                And it can even lead to real problems again, with styling or with accessibility, if you
                have such nested overlay content because if, for example, a screen reader has to
                interpret your HTML code, which is being rendered, it might not see this as a general
                overlay, because your CSS styling won't matter too much there.

                And from a semantical perspective, from the structure it has, it's deeply structured in
                our HTML code. So it's not obvious that this modal should be overlay to all the other
                content. And that's not just a case for modals, you would have similar problems for side
                drawers, for dialogues, typically for all kinds of overlays or any related Components.

                It's a little bit as if you would create a button, by simply styling a div like a button
                and adding an event listener. It will work technically, but it's not a good practice.
                It's bad for accessibility, it's bad if a fellow developer has to work with that it's
                simply not a good idea.

                In web development in general, with HTML, CSS and JavaScript because it's so forgiving
                you can make a lot of things work but that doesn't mean that just because it works, it's
                also a good implementation. It's also a good idea to use it like this. And that's where
                we can use another React concept, to get rid of this problem with the Modal, with the
                overlay content, which shouldn't be deeply nested.

                We can use a portal to keep the structure we have on the Place 1, so to keep writing our
                Components the way we want to write them so that we have no friction when we want to
                pass data around. But to still render this differently in the real DOM, for example, to
                render the Modal HTML content somewhere else than it would normally go to.

                So that on the Place 1, the JSX code rewrite hasn't changed but the rendered HTML code
                is a bit different from our JSX code. So the Modal here is not next to the Form and you
                can achieve this with React Portals.

                <div class="my-modal">
                    <h2>A Modal Title!</h2>
                </div>
                <section>
                    <h2>Some other content</h2>
                    <form>
                        <label>Username</label>
                        <input type="text" />
                    </form>
                </section>
            */}
        </p>
    )
}

export default IntroducingReactPortals;