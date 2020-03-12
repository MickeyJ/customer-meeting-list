import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CustomerList({ customers }) {
  const [ageFiltered, setAgeFiltered] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState({});

  const isSelectedCustomer = customer => customer.id === selectedCustomer.id;

  return (
    <div className="customer-list" onClick={() => setSelectedCustomer({})}>
      <h2>Customers</h2>

      <FormControlLabel
        label="show age 35 or younger"
        control={
          <Checkbox
            checked={ageFiltered}
            onChange={() => setAgeFiltered(!ageFiltered)}
          />
        }
      />

      {customers
        .filter(({ age }) => {
          if (!ageFiltered) return true;
          return age <= 35;
        })
        .map(customer => {
          return (
            <Card
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
              <CardContent>

                <Typography variant="h6" color="textPrimary">
                  {customer.name}
                </Typography>

                <Typography color="textSecondary">
                  {customer.age}
                </Typography>

                <Typography color="textSecondary">
                  {customer.company.name}
                </Typography>

              </CardContent>
            </Card>
          );
        })}
    </div>
  );
}
