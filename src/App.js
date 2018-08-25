import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
