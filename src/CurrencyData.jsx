import React, { Component } from 'react';
import CurrencyTable from './CurrencyTable'


class CurrencyData extends Component {
  componentWillMount() {
    let url = "https://api.coinmarketcap.com/v1/ticker/?limit=100";
    if(this.props.value) {
      url = url + "&convert="+ this.props.value;
    }
    fetch(url)
    .then(
      data => data.json())
    .then(
      data => this.setState({
        currency: data
    }))
  }
  render() {
      if(this.state){
        console.log("currency state", this.state)
        return (
            <CurrencyTable
              data={this.state.currency}
              tradeValue={this.props.value}
            />
        )
    }
    return <div>LoadingData...</div>
  }
}
export default CurrencyData;
