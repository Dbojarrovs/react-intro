import React from "react";
import { Menu } from "semantic-ui-react";
import { Grid, Image, Label } from 'semantic-ui-react';

const MenuItem = (props) => {
  return (
    <div>
      <Grid.Column mobile={4} computer={2} textAlign='center'>
        <Image src={props.image} alt={props.alt} size='tiny' centered />
        <Label tag>&euro; {props.price.toFixed(2)} </Label >
    </Grid.Column>
    </div>
  )
};

export default MenuItem;
