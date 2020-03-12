import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CustomerList = ({ customers }) => {
  const [ageFiltered, setAgeFiltered] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState({});

  const isSelectedCustomer = customer => customer.id === selectedCustomer.id;

  return (
    <div className="customer-list" onClick={() => setSelectedCustomer({})}>
      <h2>Customers</h2>

      <FormControlLabel
        control={
          <Checkbox
            checked={ageFiltered}
            onChange={() => setAgeFiltered(!ageFiltered)}
          />
        }
        label="show age 35 or younger"
      />

      {customers
        .filter(({ age }) => {
          if (!ageFiltered) return true;
          return age <= 35;
        })
        .map(customer => {

          // console.log('isSelectedCustomer', isSelectedCustomer(customer) && 'selected-customer');

          return (
            <Card
              key={customer.id}
              className={`customer ${isSelectedCustomer(customer) ? 'selected-customer' : ''}` }
              onClick={e => {
                e.stopPropagation();
                if (isSelectedCustomer(customer)) {
                  return setSelectedCustomer({});
                }
                setSelectedCustomer(customer);
              }}
            >
              <CardContent>
                <Typography color="textPrimary">{customer.name}</Typography>
                <Typography color="textSecondary">{customer.age}</Typography>
                <Typography color="textSecondary">
                  {customer.company.name}
                </Typography>

                {/* <Typography variant="h5" component="h2">
  
              </Typography>
              <Typography color="textSecondary">
              adjective
              </Typography> */}
                {/* <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
              </Typography> */}
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};

export default CustomerList;
