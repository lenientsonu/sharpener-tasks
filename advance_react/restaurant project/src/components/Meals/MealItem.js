import React from "react";
import "./MealItem.css";

const MealItem = (props) => {
    return (
        <li className='meal'>
            <div>
                <h3>{props.title}</h3>
                <div className='description'>{props.detail}</div>
                <div className='price'>₹{props.price}</div>
            </div>
        </li>
    );
};

export default MealItem;
