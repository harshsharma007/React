import React from 'react'

const userInput = (props) => {
    return (
        <div>
            <input type="text" onClick={props.clicked} value={props.username} onChange={props.changed} />
            <p>{props.username}</p>
        </div>
    )
}

export default userInput;