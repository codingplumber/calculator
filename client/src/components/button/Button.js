import React from 'react';

import classes from './Button.css';

const button = props => {
    let classStyle;

    if (props.display === 'clear') classStyle = classes.Clear
    else classStyle = classes.Button

    return (
        <div className={classStyle} onClick={() => props.clicked(props.display)}>{props.display}</div>
    );
}

export default button;