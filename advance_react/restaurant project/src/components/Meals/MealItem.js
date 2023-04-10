import React from "react";
import "./MealItem.css";

const MealItem = (props) => {
    return (
        <li className='meal'>
            <h3>{props.title}</h3>
            <span>{props.detail}</span>
            <span>{props.price}</span>
        </li>
    );
};

export default MealItem;
