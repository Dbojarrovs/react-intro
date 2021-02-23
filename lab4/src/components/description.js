import React from 'react';
const description = (props) => {

    return (
        <div className="description">
            <p onClick={props.hide} className="hide">Hide this description</p>
        </div>

    )
}  

export default description; 