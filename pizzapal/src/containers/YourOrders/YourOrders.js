
import React, { useState, useEffect } from "react";
import axios from '../../axios-orders';
import OrdersTable from '../../components/OrdersTable/OrdersTable';
import { Message } from 'semantic-ui-react';

const YourOrders = (props) => {
  const [pastOrdersState, setPastOrdersState] = useState({
    orders: [],
    ordersLoaded: false,
    error: false
  });

  useEffect(() => {
    axios.get('/orders.json')
    .then(response => {
      // get orders from firebase (returns an object)
      let ordersObject = response.data;

      // create an empty array
      let ordersArray = []; 

      // store each order object in the ordersArray
      for (let i in ordersObject){
        ordersArray.push(ordersObject[i]);
      }

      // update the state
      setPastOrdersState({orders: ordersArray, ordersLoaded: true, error: false});
    })
    .catch(error => {
      setPastOrdersState({orders: pastOrdersState.orders, ordersLoaded: pastOrdersState.ordersLoaded, error: true});
      console.log(pastOrdersState.error, error);
    });
  }, [])

console.log(pastOrdersState.orders);

return (
  <div>
    <OrdersTable orders={pastOrdersState.orders} />
  </div>
)
};

export default YourOrders;
