import React from 'react';
import moduleName from 'module'
import './Person.css';


const person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.click}>My name is {props.name} and I'm learning {props.course}</p>
            {/* When using a class use {this.props.name} */}

            <p>{props.children}</p>
            {/* For getting content outside of <person> tag from App.js</person> */}
        </div>
    );
};

export default person;