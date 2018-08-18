import React from 'react';

import classes from './Button.css';

const button = props => {
    let classStyle;

    // if (props.display === 'clear') classStyle = classes.Clear
    // else classStyle = classes.Button

    switch(props.display) {
        case 'clear':
            classStyle = classes.Clear;
            break;
        case '+':
        case '/':
        case 'x':
        case '-':
            classStyle = classes.Maths;
            break;
        default:
            classStyle = classes.Button
    }

    return (
        <div className={classStyle} onClick={() => props.clicked(props.display)}>{props.display}</div>
    );
}

export default button;