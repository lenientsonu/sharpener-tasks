import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from '../Cart/HeaderCartButton'

import './Header.css'


const Header = () => {
    return (
        <>
        <Navbar bg='dark' variant='dark'>
            <Container>
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Nav className='me-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#store'>Store</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                </Nav>
                <HeaderCartButton />
            </Container>
        </Navbar>
        <Container className="title">
            <h1>The Generics</h1>
        </Container>
        </>
    )
};

export default Header;
