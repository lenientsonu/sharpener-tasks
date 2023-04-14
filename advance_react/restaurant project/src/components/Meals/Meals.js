import React from "react";
import MealItem from "./MealItem";
import Card from '../UI/Card'
import "./Meals.css";

const Meals = (props) => {
    const mealsList = props.meals.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            title={meal.title}
            detail={meal.detail}
            price={meal.price}
        />
    ));

    return (
        <section className='meals'>
            <Card>
            <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default Meals;
