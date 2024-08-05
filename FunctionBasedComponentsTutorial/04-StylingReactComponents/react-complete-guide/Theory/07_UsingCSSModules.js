import React from 'react';

const UsingCSSModules = () => {
    return (
        <p>
            {/*
                Styled Components are not as an absolutely personal thing there is no wrong or right here.
                When it comes to me personally, I prefer CSS in the CSS files. I like the separation
                of CSS and JavaScript. I like having clean JavaScript files and I simply like default
                CSS. You can absolutely stick to the CSS approach we used at the beginning where you
                had global non scoped styles and you as a developer had to make sure you're not
                accidentally reusing names (class names).

                You're not accidentally affecting the styles of other Components. That is definitely one
                route you can take. You can also however take CSS to the next level with a feature
                called CSS Modules. CSS Modules is a feature which is only available in projects that
                are configured to support it because it needs a code transformation that needs to be
                done before your code runs in the browser.

                The good thing is the React projects created with create-react-app, which we used are
                already configured to support CSS Modules. To see how CSS Modules work, let's start with
                the Button.js and comment out the Styled Component we configured it before and add the
                import React statement again and we will now again use our JSX code of Button again.

                We have Button.css file and in there we got the different styles and we can leave that
                as it is. There is one thing we now need to change though. Of course, we need to add the
                import to the CSS file again, but instead of importing it like this:

                import './Button.css';

                You now import it slightly different. You import like this:

                import styles from './Button.css';

                That's the syntax we haven't used before, but that is actually how you have to import
                from a CSS file if you want to use CSS Modules. For that code transformation, which is
                need behind the scenes to happen, you also need to rename your CSS file a little bit.
                You need to add .module in there, so that it's named Button.module.css.

                You also need to correct your import statement so that it should look something like:

                import styles from './Button.module.css';

                This is basically a signal to the underlying compilation process to transform the code
                so that CSS Modules work. Now we need to do something with this import that styles thing
                here. We use it down there where we apply our className. Instead of applying a string
                className like:

                <button type={props.type} className="button"></button>

                You apply something dynamic, you refer to the styles, which we're importing from the CSS
                file. And that thing turns out to be an object and in that object, you'll have every
                class you defined in your file as a property. So if I added a button class in
                Button.module.css file, I now have the button property in the className like:

                <button type={props.type} className={styles.button}></button>

                And that's all we need to do, this will apply the button class in a special way to the
                button element. This will let the button behave in an exact same manner it was behaving
                before. But if we inspect our button element and there you will see a very strange class.
                This is not the same class as added by Styled Components.

                Instead this looks a bit like the class we defined (button) but with more information
                added to it. It's basically {ComponentName}_{OurClassName}__{SomeUniqueHash}. What CSS
                Modules does or what this concept of CSS Modules does under the hood is it takes those
                CSS classes and a CSS file and basically changes those class names to be unique.

                That's the core thing it does. For every Component it changes the class names of the
                classes you're importing (off the CSS file you were importing to be unique). So if you
                import from the CSS file in the Button Component, it will create unique classes, unique
                versions of all those styles and classes here for this Component.

                And for that it generates brand new class names that look like:

                {ComponentName}_{OurClassName}__{SomeUniqueHash}

                Inside of these class names, it will keep your styles it will not touch those but wrapped
                into this new class name. You can see this if you expand the head section in the
                rendered DOM. There you will see a bunch of style texts and if we now search for the
                Button, we see that's this newly generated class name.

                Here we have our button styles and that newly generated class name is also used on the
                focus style, on the hover and on the active style. With that CSS Modules concept ensures
                that the CSS styles we set up in a CSS file are scoped to the Component we import this
                file into.

                For that we need to work with CSS classes because we then access those classes as
                properties on the imported styles object. This is how ({styles.button}) we basically
                make the connection between these dynamically generated class names, which we as a
                developer don't know in advance and our Components here.
            */}
        </p>
    )
}

export default UsingCSSModules;