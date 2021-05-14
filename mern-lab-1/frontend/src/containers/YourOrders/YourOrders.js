
import OrdersTable from '../../components/OrdersTable/OrdersTable';

import React, { useState, useEffect } from "react";
import axios from '../../axios-orders';
import { Message } from 'semantic-ui-react';
import Loader from '../../components/Feedback/Loader/Loader';
import ErrorModal from '../../components/Feedback/ErrorModal/ErrorModal';


const YourOrders = (props) => {
  const [pastOrdersState, setPastOrdersState] = useState({
    orders: []
});

const [errorState, setErrorState] = useState({
    error: false, 
    errorMessage: null
});

const [loadingState, setLoadingState] = useState({
    isLoading: true, 
    ordersLoaded: false,
    loadFailed: false
});

const errorHandler = () => {
  setErrorState({
    error: false, 
    errorMessage: null
  });
  setLoadingState({
    isLoading: loadingState.isLoading,
    ordersLoaded: loadingState.ordersLoaded,
    loadFailed: true
  });
};

      useEffect(() => {
        axios.get('/orders')
    .then(response => {
      setPastOrdersState({orders: response.data.orders});
      setLoadingState({isLoading: false, ordersLoaded: true, loadFailed: loadingState.loadFailed});
    })
    .catch(error => {
      setErrorState({error: true, errorMessage: error.response.data.message});
      setLoadingState({isLoading: false, ordersLoaded: loadingState.ordersLoaded, loadFailed: loadingState.loadFailed});
      console.log(pastOrdersState.error, error);
    });
      }, []) 

    console.log(pastOrdersState.orders);
    
    let orders = 
    errorState.error ? 
    <ErrorModal error={errorState.errorMessage} onClear={errorHandler} /> : 
    <Loader active={loadingState.isLoading} />;

  if (loadingState.ordersLoaded && pastOrdersState.orders.length > 0){
    orders = <OrdersTable orders={pastOrdersState.orders} /> ;
  }
  else if (loadingState.loadFailed) {
    orders = <p>We can't load your orders... maybe try creating one?</p>
  }


 return (
    <div>
      {orders}
    </div>
  )
   
};

export default YourOrders;
