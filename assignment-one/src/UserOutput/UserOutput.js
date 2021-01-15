import React from 'react'

const userOutput = (props) => {
    return (
        <div>
            <p onClick={props.clicked}>{props.paragraph}{props.username}</p>
            <p>{props.newPara}</p>
            <span>{props.username}</span>
        </div>
    )
}

export default userOutput;