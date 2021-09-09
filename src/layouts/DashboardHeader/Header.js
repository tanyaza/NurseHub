// import React from 'react';
// import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";
// import './Header.css';

// function Header() {

//     const history = useHistory();

//     const route = path => {
//       history.push(path);
//     };

//     return (
//         <Navbar bg="light" expand="lg">
//             <Navbar.Brand href="#home">داشبورد</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <Nav.Link onClick={() => route('dashboard')}>صفحه اصلی</Nav.Link>
//                     <Nav.Link href="#link">Link</Nav.Link>
//                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                     </NavDropdown>
//                 </Nav>
//                 <Form inline className="pull-left">
//                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                     <Button variant="outline-success">Search</Button>
//                 </Form>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }

// export default Header;


import React, { useState } from 'react';
import {
    A, Form, Input, Button, Navbar, Container, NavbarBrand,
    NavbarToggler, Collapse, Nav, NavItem, NavLink,
} from '@bootstrap-styled/v4';

const Header = () => {

    const [isOpen, setOpen] = useState();

    return (
        <Navbar color="faded" light toggleable="lg">
            <Container>
                <div className="d-flex justify-content-between">
                    <NavbarBrand tag={A} to="brand">Brand</NavbarBrand>
                    <NavbarToggler onClick={() => setOpen(!isOpen)} />
                </div>
                <Collapse navbar isOpen={isOpen}>
                    <Nav navbar className="mr-auto">
                        <NavItem>
                            <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Friends</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink disabled>Disabled</NavLink>
                        </NavItem>
                    </Nav>
                    <Form inline className="my-2 my-lg-0">
                        <Input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <Button href="test" color="success">Search</Button>
                    </Form>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;