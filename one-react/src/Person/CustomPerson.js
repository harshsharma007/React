import React from 'react'
import './Person.css'
/*
    Adding Styling with Stylesheets
    It might look strange to import a CSS file into a JavaScript file like above but thanks to webPack
    which is the build tool which is in the end used by the React script package we're using implicitly.
    Thanks to webPack, we can import CSS into JavaScript though it will not really merge the two files,
    it is just made aware of that CSS file and will handle that differently, will bascially import
    it into our html file.

    Also, we need to specify file extension in case of CSS file. We can only omit file extension for JS
    file.

    If you inspect an element in the developer tools, you can see there are style tags which you can't
    find in the html file in the public folder. There we got no style tags in the head section. The
    reason for this is that the style text are injected dynamically by webPack, this is the part I meant
    with it manages the imports you add.
*/

/*
    props name is up to you but you will receive one argument in your function, one argument which is
    passed into it by default by react which is an object with all the properties of this component and
    properties means the attributes you add on your component.
*/
const customPerson = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>

            {/*
                To fetch "My Hobbies: Racing" section we need to write the below code. "children" is the
                reserved word. We didn't pass anything as children on our persons, we only pass name and
                age.

                Children refers to any elements and this includes plain text as we have it here between
                the opening and closing tag of our component, and you could nest complex html code
                in-between too.
                
                This doesn't have to be just text, could be unordered list with multiple list items,
                could be other react components, anything can go between here. And these children are now
                output with this syntax.
                
                If we inspect the output, we see that an empty paragraph is rendered for every "CustomPerson"
                that we are calling from App.js. So the paragraph is there but it's empty because
                props.children is basically undefined as null because we have nothing between opening
                and closing tag.
                
                This is important to know you can put your content into your component from outside, not
                only by passing props but if you want to pass some structured html content also by placing
                it between the opening and closing tag and accessing it with props.children.
            */}

            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default customPerson