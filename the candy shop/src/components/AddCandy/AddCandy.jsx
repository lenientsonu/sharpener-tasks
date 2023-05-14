import React, { useContext, useRef } from "react";

import "./AddCandy.css";
import CandyContext from "../../store/candy-context";

const AddCandy = () => {
    const candyCtx = useContext(CandyContext);
    const nameRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const nameValue = nameRef.current.value;
        const descValue = descRef.current.value;
        const priceValue = priceRef.current.value;
        const candyDetails = {
            id: Date.now(),
            title: nameValue,
            detail: descValue,
            price: priceValue,
        };
        candyCtx.addCandy(candyDetails);
    };

    return (
        <div className='add-candy'>
            <form onSubmit={onSubmitHandler}>
                <div className='add-candy_controls'>
                    <div className='add-candy_control'>
                        <label htmlFor='name'>Candy Name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            ref={nameRef}
                        />
                    </div>
                    <div className='add-candy_control'>
                        <label htmlFor='desc'>Candy Description</label>
                        <input
                            type='text'
                            name='desc'
                            id='desc'
                            ref={descRef}
                        />
                    </div>
                    <div className='add-candy_control'>
                        <label htmlFor='price'>Candy Price</label>
                        <input
                            type='text'
                            name='price'
                            id='price'
                            ref={priceRef}
                        />
                    </div>
                    <button type='submit'>Add Candy</button>
                </div>
            </form>
        </div>
    );
};

export default AddCandy;
