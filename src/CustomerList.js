import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CustomerList({ customers }) {
  const [selectedCustomer, setSelectedCustomer] = useState({});
  const [showThirtyFiveOrYounger, setShowThirtyFiveOrYounger] = useState(false);

  const isSelectedCustomer = customer => customer.id === selectedCustomer.id;

  return (
    <div
      className="customer-list-page"
      onClick={() => setSelectedCustomer({})}
    >

      <header className="customer-list-header">

        <h2>Customers</h2>

        <div className="customer-list-options">
          <FormControlLabel
            label="show customers age 35 or younger"
            onClick={e => e.stopPropagation()}
            control={
              <Checkbox
                checked={showThirtyFiveOrYounger}
                onChange={() => setShowThirtyFiveOrYounger(!showThirtyFiveOrYounger)}
              />
            }
          />
        </div>

      </header>

      <section className="customer-list-scroll-wrapper">
        <div className="customer-list">
          {customers
            .filter(({ age }) => !showThirtyFiveOrYounger || age <= 35)
            .map(customer => {
              return (
                <Card
                  raised
                  key={`customer_${customer.id}`}
                  className={`customer ${isSelectedCustomer(customer) ? 'selected-customer' : ''}`}
                  onClick={e => {
                    e.stopPropagation();

                    if (isSelectedCustomer(customer)) {
                      return setSelectedCustomer({});
                    }
                    setSelectedCustomer(customer);
                  }}
                >
                  <CardContent
                    style={{ color: isSelectedCustomer(customer)}}
                  >

                    <Typography variant="h6" color="textPrimary" align="center">
                      {customer.name}
                    </Typography>

                    <Typography color="textSecondary">
                      age: {customer.age}
                    </Typography>

                    <Typography color="textSecondary">
                      company: {customer.company.name}
                    </Typography>

                  </CardContent>
                </Card>
              );
            })}
        </div>
      </section>


    </div>
  );
}
