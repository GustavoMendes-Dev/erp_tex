import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';

import './navSecondary.css';


function NavSecondary({children, ...props}) {

    return (
        <Navbar bg="light" variant="light" className="NavSecondary">
            <Container fluid>
                <Nav variant="pills" defaultActiveKey="/home" className="LinkHeader_secondary">
                   {children}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavSecondary;