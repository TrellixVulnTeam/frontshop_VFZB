import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import '../css/App.css';
import {MdShoppingBasket,MdPerson} from 'react-icons/lib/md'

export default class Header extends Component {
    render() {

        return (
            <Navbar fluid fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        Fnduister
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsClass="collapse nav list-inline center-block text-center">
                        <NavItem eventKey={1} href="#">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Contact
                        </NavItem>
                        <NavDropdown eventKey={3} title="Names" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>
                                Martine
                            </MenuItem>
                            <MenuItem eventKey={3.2}>
                                Diana
                            </MenuItem>
                            <MenuItem eventKey={3.3}>
                                Jean
                            </MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.4}>
                                Fabrice
                            </MenuItem>
                        </NavDropdown>
                    </Nav></Navbar.Collapse>
                    <Nav pullRight bsClass="nav toolbar">
                        <NavItem eventKey={4}>
                            <MdPerson/>
                        </NavItem>
                        <NavItem eventKey={5}>
                            <MdShoppingBasket />
                            <span className="count">
                                2
                            </span>
                        </NavItem>
                    </Nav>
            </Navbar>
        );
    }
}