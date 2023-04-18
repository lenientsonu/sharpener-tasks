import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Product from "./Product";

import "./Products.css";

const productsArr = [
    {
        title: "Colors",
        price: 100,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
        title: "Black and white Colors",
        price: 50,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
        title: "Blue Color",
        price: 100,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
];

const Products = () => {
    return (
        <Container className='products'>
            <h2>Music</h2>
            <Row xs={1} md={2} className='g-4'>
                {productsArr.map((product) => (
                    <Product product={product} />
                ))}
            </Row>
        </Container>
    );
};

export default Products;
