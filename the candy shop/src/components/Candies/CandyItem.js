import React from "react";
import CandyItemForm from './CandyItemForm'
import './CandyItem.css'

const CandyItem = (props) => {
    return (
        <li className='candy'>
            <div>
                <h3>{props.title}</h3>
                <div className='description'>{props.detail}</div>
                <div className='price'>₹{props.price}</div>
            </div>
            <div>
                <CandyItemForm id={props.id} candy={props} />
            </div>
        </li>
    );
};

export default CandyItem;
