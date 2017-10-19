import React, { Component } from 'react';
import CurrencyTable from './CurrencyTable'


class CurrencyData extends Component {

  constructor(props) {
    super(props);
    this.state = {
        selectCurrency: "usd"
    }
    this.getData();
  }

  changeCurrency = (event) => {
    this.setState({
      selectCurrency: event.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectCurrency !== this.state.selectCurrency) {
      this.getData();
    }
  }
  getData() {

    let url = "https://api.coinmarketcap.com/v1/ticker/?limit=100"
              + "&convert="+ this.state.selectCurrency;
    fetch(url)
    .then(
      response => response.json())
    .then(function(data) {
       console.log("this", this)
       this.setState({currency: data})
       this.props.handlerFromParant(data)
     }.bind(this))
  }

  render() {
      if(this.state.currency){
        return (
          <div>
            <div >
              <select className="currencySelector" value={this.state.selectCurrency} onChange={(event) => this.changeCurrency(event)}>
                <option value="usd">usd</option>
                <option value="eur">eur</option>
                <option value="eth">eth</option>
                <option value="btc">btc</option>
              </select>
            </div>
            <CurrencyTable
              data={this.state.currency}
              value={this.state.selectCurrency}
            />
          </div>
        )
    }
    return <div>LoadingData...</div>
  }
}
export default CurrencyData;
