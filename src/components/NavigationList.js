import React, {useState} from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from "reactstrap";

export default function NavigationList(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    // <div className="Nav">  
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">NASA POTD</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Donate</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Contact</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavBar>
                        <DropdownToggle nav caret>
                            Past Photos
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <a href={props.link}>Yesterday</a>
                            </DropdownItem>
                            <DropdownItem>
                                December 9, 2019
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Show More
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Welcome!</NavbarText>
            </Collapse>
        </Navbar>
    // </div>
    )
}