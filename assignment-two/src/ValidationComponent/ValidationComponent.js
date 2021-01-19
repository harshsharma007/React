import React from 'react'

const validationComponent = (props) => {
    let output
    if (props.textLength < 6) {
        output = (
            <div>Text Too Short!!</div>
        )
    }
    else {
        output = (
            <div>Text Too Long!!</div>
        )
    }

    return (
        <div>
            {
                props.textLength > 5 ?
                <p>Text Too Long</p> :
                <p>Text Too Short</p>
            }
            {output}
        </div>
    )
}

export default validationComponent