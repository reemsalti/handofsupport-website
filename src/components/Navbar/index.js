import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, Logo, Link} from "./NavbarElements";


const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <Logo />
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <Link to='/about'>ABOUT</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/policy'>POLICY</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/location'>LOCATION</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/contact'>CONTACT</Link>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
