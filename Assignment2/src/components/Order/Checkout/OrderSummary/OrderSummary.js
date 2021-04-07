import React from "react";
import { Header, List } from 'semantic-ui-react';

const OrderSummary = (props) => {

  const ingredientIdsArray = [];
  for(let i in props.ingredients){
    ingredientIdsArray.push(props.ingredients[i].id);
  };

  
    // function to count occurences of each topping
    const countOccurrences = (array, value) => array.reduce((count, num) => (num === value ? count + 1 : count), 0);
  
     // create an empty array for storing the toppings with their counts
  const ingredientsSummary = [];

  // loop through and check for all 16 ids
  for(let id=0; id<16; id++){

      // use countOccurences to count occurences of each id
      let ingredientCount = countOccurrences(ingredientIdsArray, id);

       // if a topping has a count more than 0
       if (ingredientCount > 0) {

        // create a new object for that topping that includes the count
        const ingredientWithCount = {
            id: id,
            name: props.menu[id].alt,
            count: ingredientCount
        };

        // add the toppingWithCount to the toppingsSummary array
        ingredientsSummary.push(ingredientWithCount);
  }
}
  return (
      
    <div>
       <Header as='h4' className='h4margin'>
      Total Price: &euro; {props.price.toFixed(2)}
  </Header>
    <List divided verticalAlign='middle'>
      {props.ingredients.map((ingredient) => {
          return( 
            <List.Item key={ingredient.id}>
            {ingredient.name}: {ingredient.count}
        </List.Item>
          )
      })}
  </List>
    </div>
  )
};

export default OrderSummary;
