import React from "react";
import ClothItem from "./ClothItem";
import Card from '../UI/Card'
import './Clothes.css'

const clothes = [
    {
        id: "c1",
        title: "Jack And Jones",
        detail: "Solid Cotton Regular Fit Men's Casual Shirt",
        price: 1199,
    },
    {
        id: "c2",
        title: "Louis Philippe Sports",
        detail: "Printed Cotton Slim Fit Men's Casual Shirt",
        price: 1809,
    },
    {
        id: "c3",
        title: "Allen Solly",
        detail: "Checks Cotton Regular Fit Men's Casual Shirt",
        price: 1599,
    },
    {
        id: "c4",
        title: "Van Heusen",
        detail: "Checks Cotton Slim Fit Men's Formal Wear Shirt",
        price: 1999,
    },
];

const Clothes = (props) => {
    const clothesList = clothes.map((cloth) => (
        <ClothItem
            id={cloth.id}
            key={cloth.id}
            title={cloth.title}
            detail={cloth.detail}
            price={cloth.price}
        />
    ));

    return (
        <section className='clothes'>
            <Card>
            <ul>{clothesList}</ul>
            </Card>
        </section>
    );
};

export default Clothes;
