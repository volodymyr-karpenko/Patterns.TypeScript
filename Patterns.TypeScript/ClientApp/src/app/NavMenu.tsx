import * as React from "react";
import { Container, Navbar, Nav  } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavMenu extends React.PureComponent {    

    public render() {

        return (

            <header>
                <Container>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">Patterns.TypeScript</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link eventKey="0" as={Link} to="/">Home</Nav.Link>
                                <Nav.Link eventKey="1" as={Link} to="/patterns">Patterns</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
            
        );
    }
}
