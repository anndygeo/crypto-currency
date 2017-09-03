import React, { Component } from 'react';
import CurrencyData from './CurrencyData'

class App extends Component {
  render() {
    return (
      <div>
        <CurrencyData value="eur" />
      </div>
    );
  }
}

export default App;
