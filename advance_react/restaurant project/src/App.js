import React from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Meals/Summary";
import Meals from "./components/Meals/Meals";

const mealsList = [
    {
        title: 'Burger',
        detail: 'A burger with aloo tikki!',
        price: 50
    },
    {
        title: 'Parantha',
        detail: 'A mixed parantha!',
        price: 80
    },
    {
        title: 'Grilled Sandwich',
        detail: 'A sandwich with veggies!',
        price: 120
    },
    {
        title: 'Ice Cream',
        detail: 'A chocolate icecream!',
        price: 40
    }
]

function App() {
    return (
        <React.Fragment>
            <Header />
            <Summary />
            <Meals meals={mealsList} />
        </React.Fragment>
    );
}

export default App;
