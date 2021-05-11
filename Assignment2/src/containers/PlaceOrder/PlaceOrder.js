import React, { useState } from "react";
import { Grid, Segment, Header, Button, Form, Select } from 'semantic-ui-react';
import OrderSummary from "../../components/Order/Checkout/OrderSummary/OrderSummary";
import { withRouter } from 'react-router-dom';
import axios from '../../axios-orders';
import { v4 as uuidv4 } from 'uuid';

 

const PlaceOrder = (props) => {
    const [orderState, setOrderState] = useState({
        totalPrice: props.location.state.order.totalPrice, 
        chosenIngredients: props.location.state.order.chosenIngredients
      }); 
   
      const cancelHandler = () => {
        props.history.push({
            pathname: '/', 
            state: {
              order: orderState, 
            }
          });
    };
    const [customerState, setCustomerState] = useState({
        details:{
            name: "",
            phone: "",
            method: "",
            address: ""
        }
    });
    const formChangedHandler = (event, inputIdentifier, inputType) => {

        let customerDetails = customerState.details;

        switch(inputIdentifier) {
            case "form-input-name":
                customerDetails.name = event.target.value;
                break;
            case "form-input-phone":
                customerDetails.phone = event.target.value;
                break;
            case "form-input-method":
                customerDetails.method = event.target.textContent;
                break;
            case "form-input-address":
                customerDetails.address = event.target.value;
                break;
            default:
              customerDetails = customerState.details;
          }

        setCustomerState({details: customerDetails});
    }

    const checkoutHandler = () => {

        // get order from orderState
         let order = orderState;

         // add unique id
         order.id = uuidv4();

         // create formatted date
         let orderDate = new Date();

         const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
         const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

         let dayNum = orderDate.getDay();
         let day = days[dayNum];

         let monthNum = orderDate.getMonth();
         let month = months[monthNum];

         let date = orderDate.getDate();
         let year = orderDate.getFullYear();

         // saves date in the format "Fri 19 Mar 2021"
         let formattedDate = day + " " + date + " " + month + " " + year;

         // add formattedDate to order
         order.date = formattedDate;

         // add customer details to order
         order.details = customerState.details;

         axios.post('/orders.json', order)
         .then(response => {
             alert('Order saved!');
         })
         .catch(error => {
           alert('Something went wrong :(');
           console.log(error);
           });
     }

    return (
    <div>
      <Grid>
        <Grid.Row columns={2}>

            <Grid.Column width={6}>
                <Segment color='red'>
                    <Header as='h2' textAlign='center' color='red'>
                        Confirm your order:
                    </Header>
                    <OrderSummary 
        menu = {props.location.state.menu}
        ingredients = {orderState.chosenIngredients}
        price = {orderState.totalPrice}
    />  
     <Button color="red" onClick={cancelHandler}>Go Back</Button>
                </Segment>
            </Grid.Column>

            <Grid.Column width={10}>
                <Segment color='red'>
                        <Header as='h2' textAlign='center' color='red'>
                            Enter your details:
                        </Header>
                        <Form>
      <Form.Input
          error='Please enter your name'
          required
          label='Name'
          placeholder='Name'
          id='form-input-name'
          onChange={(event) => formChangedHandler(event, 'form-input-name', 'input')}
      />
      <Form.Input
          error='Please enter your phone number'
          required
          label='Phone'
          placeholder='Phone'
          id='form-input-phone'
          onChange={(event) => formChangedHandler(event, 'form-input-phone', 'input')}
      />
      <Form.Field
          control={Select}
          required
          error='Please choose collection or delivery'
          label='Delivery method'
          options={[
              { key: 'c', text: 'Collection', value: 'collection' },
              { key: 'd', text: 'Delivery', value: 'delivery' }
          ]}
          placeholder='Collection or Delivery'
          id='form-input-method'
          onChange={(event) => formChangedHandler(event, 'form-input-method', 'select')}
      />
      <Form.Input
          error='Please enter your delivery address'
          fluid
          label='Address'
          placeholder='Address'
          id='form-input-address'
          onChange={(event) => formChangedHandler(event, 'form-input-address', 'input')}
      />
<Button type='submit' color='green' onClick={checkoutHandler}>Submit</Button>
  </Form>
                    </Segment>
            </Grid.Column>

        </Grid.Row>
    </Grid>
    </div>
  )
};

export default withRouter(PlaceOrder);
