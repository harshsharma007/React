import React from 'react'
import Radium from 'radium'
import './Person.css'

/*
    Using Radium For Media Queries

    We can use media queries in CSS file like below:
    @media (min-width: 500px) {
      .person {
        width: 450px;
      }
    }

    But we will use something different for Radium. For that we have to add style variable and specify
    the media condition, thereafter define the style as a JavaScript object. '@media (min-width: 500px)'
    is a JavaScript property name because it's a string, it's a valid name and radium will parse it
    and understand it because it's a media query and among pseudo selectors it's something that radium
    understands.

    style variable is then assigned to the div of the component. It will override the class settings,
    by default CSS rule not because of radium. If you run the application and click the 'Toggle Person'
    button, you will find that the application will throw an error.

    -> Uncaught Error: To use plugins requiring 'addCSS' (e.g. keyframes, media queries), please wrap
    your application in the StyleRoot component. This is a component made available by Radium and
    whilst wrapping the export with radium is enough for its pseudo selectors, for basically transforming
    selectors like media queries or other animations with keyframes, we need to wrap the entire
    application in a special component provided by Radium. There we can simply import a named export
    { StyleRoot } from Radium and now we can simply wrap our whole application with that.

    If you resize now, it will work. The boxes are staying in the middle but they're not growing in
    width anymore, they are growing to 60 percent of the size. If we go below my media query threshold
    which was 500px. If we go below that threshold, it will basically stick to 60 percent, if we go above
    that it will stay at the fixed width of 450px.

    For media queries, you need to wrap application with StyleRoot component. But if you are using only
    pseudo selectors alone you don't need to do that you just need to wrap export with Radium function.
*/

const customPerson = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(customPerson)