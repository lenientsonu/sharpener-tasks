import React from "react";

const CandyContext = React.createContext({
    candies: [],
    addCandy: () => {}
});

export default CandyContext;
