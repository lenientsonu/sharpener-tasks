import React from "react";
import MealItem from "./MealItem";
import "./Meals.css";

const Meals = (props) => {
    return (
        <div className="meals">
            <ul>
                {props.meals.map((meal) => (
                    <MealItem title={meal.title} detail={meal.detail} price={meal.price} />
                ))}
            </ul>
        </div>
    );
};

export default Meals;
