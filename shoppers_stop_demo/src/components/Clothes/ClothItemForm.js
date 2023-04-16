import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./ClothItemForm.css";

const ClothItemForm = (props) => {
    const cartCtx = useContext(CartContext);

    const addLargeItem = (event) => {
        event.preventDefault();
        cartCtx.addItem({...props.cloth, size: 'L'})
    };

    const addMediumItem = (event) => {
        event.preventDefault();
        cartCtx.addItem({...props.cloth, size: 'M'})
    };

    const addSmallItem = (event) => {
        event.preventDefault();
        cartCtx.addItem({...props.cloth, size: 'S'})
    };

    return (
        <form className='form'>
            <button type='submit' id='large' onClick={addLargeItem}>
                Buy Large
            </button>
            <button type='submit' id='medium' onClick={addMediumItem}>
                Buy Medium
            </button>
            <button type='submit' id='small' onClick={addSmallItem}>
                Buy Small
            </button>
        </form>
    );
};

export default ClothItemForm;
