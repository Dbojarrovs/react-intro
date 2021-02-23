import React from 'react';

const subject = (props) => {

    return (
        <div className="card">
            <p>This is a subject! It is called {props.title} and it is in
            {props.year} of the course. The lecturer is: <br /> <br /> 
            <span className="lecturer">{props.lecturer}</span></p>

            <p className="children" onClick={props.readmore}>{props.children}</p>
            <p onClick={props.hide} className="hide">Hide this card</p>
           
        </div>
      
    )
    }
  

export default subject; 




