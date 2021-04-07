import Menu from '../../components/Menu/Menu';
import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import Order from '../../components/Order/Order';


const Smoothie = (props) => {

    const [menuState, setMenuState] = useState({
      ingredients: [
          { id: 0, name: 'cherry', price: .75, image: 'images/smoothie/cherry.jpg', alt: 'Cherry' },
          { id: 1, name: 'apple', price: .75, image: 'images/smoothie/apple.jpg', alt: 'Apple' },
          { id: 2, name: 'banana', price: .5, image: 'images/smoothie/banana.jpg', alt: 'Banana' },
          { id: 3, name: 'blueberry', price: .5, image: 'images/smoothie/blueberry.jpg', alt: 'Blueberry' },
          { id: 4, name: 'kiwi', price: .5, image: 'images/smoothie/kiwi.jpg', alt: 'Kiwi' },
          { id: 5, name: 'orange', price: .5, image: 'images/smoothie/orange.jpg', alt: 'Orange' },
          { id: 6, name: 'strawberry', price: .75, image: 'images/smoothie/strawberry.jpg', alt: 'Strawberry' },
          { id: 7, name: 'watermelon', price: .5, image: 'images/smoothie/watermelon.jpg', alt: 'Watermelon' },
          { id: 8, name: 'coconut', price: .75, image: 'images/smoothie/coconut.jpg', alt: 'Coconut' },
          { id: 9, name: 'melon', price: .5, image: 'images/smoothie/melon.jpg', alt: 'Melon' }
         
        ]
      });

      const [orderState, setOrderState] = useState({
        totalPrice: 5, 
        chosenToppings: []
      });

      const addToppingHandler = (id) => {
        console.log(id);
      }
      

      return (
        <Grid divided='vertically' stackable>
            <Grid.Row centered>
            <Menu menu={menuState.ingredients} />
            </Grid.Row>
            <Grid.Row>
            <Order 
   menu={menuState.toppings}
   toppingAdded={addToppingHandler}
  />
            </Grid.Row>
      </Grid>
      )
    };


export default Smoothie;