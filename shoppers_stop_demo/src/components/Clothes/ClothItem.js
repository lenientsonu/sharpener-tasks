import React from "react";
import ClothItemForm from './ClothItemForm'
import './ClothItem.css'

const ClothItem = (props) => {
    return (
        <li className='cloth'>
            <div>
                <h3>{props.title}</h3>
                <div className='description'>{props.detail}</div>
                <div className='price'>₹{props.price}</div>
            </div>
            <div>
                <ClothItemForm id={props.id} cloth={props} />
            </div>
        </li>
    );
};

export default ClothItem;
