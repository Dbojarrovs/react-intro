import React from 'react';

const subject = (props) => {

    
        return (
            <div className="card">
                <p>Hi Im here! It is called {props.title} 
                and it is in {props.year} of the course. The lecture
                is:</p>
                <p id="lecture">{props.lecture} </p>
                <p id="props">{props.children}</p>
                
            </div>
    
        )
    
}

export default subject;