import React, { useState } from "react";
import CandyContext from "./candy-context";

const CandyProvider = (props) => {
    const [candies, setCandies] = useState([]);

    const addCandyHandler = (candy) => {
        setCandies((prevCandies) => {
            return [...prevCandies, candy];
        });
    };

    const candyContext = {
        candies: candies,
        addCandy: addCandyHandler,
    };

    return (
        <CandyContext.Provider value={candyContext}>
            {props.children}
        </CandyContext.Provider>
    );
};

export default CandyProvider;
