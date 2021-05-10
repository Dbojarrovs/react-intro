import React from "react";

const PlaceOrder = (props) => {
  return (
    <div>
       <Grid>
        <Grid.Row columns={2}>

            <Grid.Column width={6}>
                <Segment color='red'>
                    <Header as='h2' textAlign='center' color='red'>
                        Confirm your order:
                    </Header>
                    Order summary goes here
                    <Button color="red">Go Back</Button>
                </Segment>
            </Grid.Column>

            <Grid.Column width={10}>
                <Segment color='red'>
                        <Header as='h2' textAlign='center' color='red'>
                            Enter your details:
                        </Header>
                        Form goes here
                    </Segment>
            </Grid.Column>

        </Grid.Row>
    </Grid>
    </div>
  )
};

export default PlaceOrder;
