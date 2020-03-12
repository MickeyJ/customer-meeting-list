import React from 'react';
import CustomerList from './CustomerList';

import { data as customers } from './data.json';

export default class CustomerApp extends React.Component {
  // normally I would fetch data in DidMount or WillMount,
  // but this will do in this case.
  state = {
    customers,
    selectedCustomer: {}
  };

  render() {
    return (
      <div className="customer-app">
        <CustomerList customers={this.state.customers} />
      </div>
    );
  }
}
