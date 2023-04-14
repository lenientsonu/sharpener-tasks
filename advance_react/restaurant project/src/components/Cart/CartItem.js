import "./CartItem.css";

const CartItem = (props) => {
    return (
        <li className='cart-item'>
            <div>
                <h2>{props.title}</h2>
                <div className='detail'>
                    <span className='price'>₹{props.price}</span>
                    <span className='quantity'>x {props.quantity}</span>
                </div>
            </div>
            <div className='actions'>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
