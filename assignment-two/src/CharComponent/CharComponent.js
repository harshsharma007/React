import React from 'react'
import CharCss from './CharComponent.css'

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }

    return (
        <div style={style} className="CharComponent" onClick={props.click}>{props.alphabet}</div>
    )
}

export default charComponent;