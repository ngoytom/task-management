import React from "react";
import { Navbar, Container, Button, NavbarBrand } from "react-bootstrap"
import Link from 'next/link'

const Header = () => {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand>
                    Project Management
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="p-3">
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    <Link href="" passHref>
                        <Button>Log Out</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;

