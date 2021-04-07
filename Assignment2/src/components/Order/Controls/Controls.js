import React from "react";
import { Grid, Header } from 'semantic-ui-react';
import Control from './Control/Control';

const Controls = (props) => {
  return (
    <Grid.Column width={8}>
        <Header as='h2' textAlign='center' className='step' color="green">
            Step 1: Choose your Ingredients
        </Header>
        <Grid>
            {props.menu.map((ingredients, index) => {
            return <Control 
                key={ingredients.id}
                alt={ingredients.alt}
                added={() => props.toppingAdded(ingredients.id)}
            />
            })}
        </Grid>
        
    </Grid.Column>
  )
};

export default Controls;
