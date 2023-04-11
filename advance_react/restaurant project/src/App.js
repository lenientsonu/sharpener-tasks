import React from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Meals/Summary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const mealsList = [
    {
        id: "m1",
        title: "Burger",
        detail: "A burger with aloo tikki!",
        price: 50,
    },
    {
        id: "m2",
        title: "Parantha",
        detail: "A mixed parantha!",
        price: 80,
    },
    {
        id: "m3",
        title: "Grilled Sandwich",
        detail: "A sandwich with veggies!",
        price: 120,
    },
    {
        id: "m4",
        title: "Ice Cream",
        detail: "A chocolate icecream!",
        price: 40,
    },
];

function App() {
    return (
        <React.Fragment>
            <Cart />
            <Header />
            <main>
                <Summary />
                <Meals meals={mealsList} />
            </main>
        </React.Fragment>
    );
}

export default App;
