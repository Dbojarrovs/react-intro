import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import MenuItem from './MenuItem/MenuItem';

const Menu = (props) => {
  return (

    <Grid.Column width={12}>

        <Segment color='green'>
            <Header as='h2' textAlign='center' color='green'>
                Smoothie Ingredients 
            </Header>
        </Segment>

        <Grid>
            {props.menu.map((ingredients, index) => {
            return <MenuItem 
                key={ingredients.id}
                image={ingredients.image}
                alt={ingredients.alt}
                price={ingredients.price}
            />
            })}
        </Grid>

    </Grid.Column>
  );
}

export default Menu;
