import React from "react";
import MealItemForm from "./MealItemForm";
import "./MealItem.css";

const MealItem = (props) => {
    return (
        <li className='meal'>
            <div>
                <h3>{props.title}</h3>
                <div className='description'>{props.detail}</div>
                <div className='price'>₹{props.price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} meal={props} />
            </div>
        </li>
    );
};

export default MealItem;
