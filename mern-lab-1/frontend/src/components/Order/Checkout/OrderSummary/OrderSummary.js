import React from "react";
import { Header, List } from 'semantic-ui-react';

const OrderSummary = (props) => {

    let summary = null;

    if(props.ingredients.length > 0){

        summary = (
            <div>
                <Header as='h3'>
                    Your Smoothie: 
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

                <Header as='h4' className='h4margin'>
                    Total Price: &euro; {props.price.toFixed(2)}
                </Header>
            </div>
        );
    }
    else{
        summary = (
            <div>
                <Header as='h4' className="h4margin">
                    Start adding some ingredients! 
                </Header>
            </div>
        );
    }


    return (
        <div>
            {summary}
        </div>
    );
};

export default OrderSummary;
