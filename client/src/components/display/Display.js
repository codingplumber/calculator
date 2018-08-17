import React from 'react';

import classes from './Display.css';

const display = props => {
    return <div className={classes.Display}>{props.display}</div>
};

export default display;