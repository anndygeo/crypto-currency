
import React, { Component } from 'react';
import main from './main.css'

import { Table } from 'react-bootstrap';

class CurrencyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data}
  }
  componentWillMount() {
    this.getData();
  }
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.data !== this.props.data) {
      this.getData();
    }
  }

  getData() {
    this.setState({data: this.props.data})
  }

  bigNumerFormat(supply) {
    return parseInt(supply).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  colorPercent(percent){
    if(percent >= 0){
      return (<div className="percent-green">{percent}%</div>)
    } else {
      return (<div className="percent-red">{percent}%</div>)
    }
  }
  orderByName() {

  }


  render() {
    // console.log("value", this.props.value)
    // console.log("data",this.state.data)
    return (
      <Table className="main-table" responsive bordered condensed >
        <thead>
          <tr>
            <th>#</th>
            <th onClick={this.orderByName.bind(this)}>Name</th>
            <th>Marke Cap</th>
            <th>Price</th>
            <th>Circulating Supply</th>
            <th>Volume(24h)</th>
            <th>% Change(24h)</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((element,index)=>
            <tr  key={index}>
              <td>{element.rank}</td>
              <td className="tableElement">
                <div className="table-element-left">
                  {element.name}
                </div>
              </td>
              <td>{this.bigNumerFormat(element["market_cap_"+this.props.value])}</td>
              <td className="tableElement">{element["price_"+this.props.value]}</td>
              <td className="tableElement">{this.bigNumerFormat(element.total_supply)} {element.symbol}</td>
              <td className="tableElement">{this.bigNumerFormat(element["24h_volume_"+this.props.value])}</td>
              <td>{this.colorPercent(element.percent_change_24h)}</td>
            </tr>
           )}
        </tbody>
      </Table>
    );
  }
}

export default CurrencyTable;
