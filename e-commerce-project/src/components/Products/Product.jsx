import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const Product = (props) => {
    return (
        <Col>
            <Card style={{ width: "18rem" }}>
                <Card.Title>{props.product.title}</Card.Title>
                <Card.Img variant='top' src={props.product.imageUrl} />
                <Card.Body>
                    <Card.Text>${props.product.price}</Card.Text>
                    <Button variant='info'>Add to Cart</Button>{" "}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
