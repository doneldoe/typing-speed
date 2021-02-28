import React from 'react';

export default (props) => {

    const text = props.text.split("");
    const userInput = props.userInput.split("");

    return (
        <div className="preview">
            {
                text.map((s, i) => {
                    let color;
                    if (i < props.userInput.length) {
                        color = s === userInput[i] ? '#bbded6' : '#ffb6b9';
                    }
                    return <span key={i} style={{backgroundColor: color}}>{s}</span>
                })
            }
        </div>
    )
}