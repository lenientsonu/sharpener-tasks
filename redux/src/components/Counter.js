import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

import { counterActions } from "../store/index";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);

    const incrementBy1Handler = () => {
        dispatch(counterActions.increase(1));
    };

    const decrementBy1Handler = () => {
        dispatch(counterActions.decrease(1));
    };

    const incrementBy5Handler = () => {
        dispatch(counterActions.increase(5));
    };

    const decrementBy5Handler = () => {
        dispatch(counterActions.decrease(5));
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementBy1Handler}>Increment by 1</button>
                <button onClick={decrementBy1Handler}>Decrement by 1</button>
                <button onClick={incrementBy5Handler}>Increment by 5</button>
                <button onClick={decrementBy5Handler}>Decrement by 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
