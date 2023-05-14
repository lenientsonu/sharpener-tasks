import React, { useContext } from "react";

import CandyContext from "../../store/candy-context";
import CandyItem from "./CandyItem";
import Card from "../UI/Card";
import "./Candies.css";

const Candies = (props) => {
    const candyCtx = useContext(CandyContext);

    const candies = candyCtx.candies;
    const candiesList = candies.map((candy) => (
        <CandyItem
            id={candy.id}
            key={candy.id}
            title={candy.title}
            detail={candy.detail}
            price={candy.price}
        />
    ));

    return (
        <section className='candies'>
            <Card>
                <ul>{candiesList}</ul>
            </Card>
        </section>
    );
};

export default Candies;
