import React, { Component } from 'react';

import Calc from './containers/calc/Calc';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Calc />
      </div>
    );
  }
}

export default App;
