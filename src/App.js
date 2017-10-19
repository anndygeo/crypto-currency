// https://coinmarketcap.com/

import React, { Component } from 'react';
import CurrencyData from './CurrencyData'
// import SearchCurrency from './SearchCurrency'

class App extends Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {currency: ''}
  }
  handleData(data) {
    this.setState({
     currency: data
    });
 }
  render() {
    console.log("test", this.state.currency)
    return (
      <div>
        {/* <SearchCurrency /> */}
        <CurrencyData handlerFromParant={this.handleData}/>
      </div>
    );
  }
}

export default App;
