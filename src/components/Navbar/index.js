import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, Logo, NavLinks, NavBtn, NavBtnLink} from "./NavbarElements";


const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <Logo to='/'>HOS</Logo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                        <NavLinks to='/'>HOME</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/about'>OUR STORY</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/blog'>BLOG</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/getinvolved'>GET INVOLVED</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/contact'>CONTACT</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavBtn>
                <NavBtnLink to='/donate'>DONATE</NavBtnLink>
                </NavBtn>
                </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
