import React from 'react';
import CustomerList from './CustomerList';

import { data as customers } from './assets/data.json';

export default function CustomerApp() {
  return (
    <div className="customer-app">
      <CustomerList
        customers={customers}
      />
    </div>
  );
}
