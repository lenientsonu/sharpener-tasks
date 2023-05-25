const redux = require("redux");

// const conterReducer = (state = { counter: 0 }, action) => {
//     return {
//         counter: state.counter + 1,
//     };
// };

const conterReducer = (state = { counter: 10 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        };
    } else if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        };
    }
};

const store = redux.createStore(conterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
