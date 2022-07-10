import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu, SideBtn, SideBtnLink } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/'>HOME</SidebarLink>
                    <SidebarLink to='/about'>OUR STORY</SidebarLink>
                    <SidebarLink to='/blog'>BLOG</SidebarLink>
                    {/* <SidebarLink to='/getinvolved'>GET INVOLVED</SidebarLink> */}
                    <SidebarLink to='/contact'>CONTACT</SidebarLink>
                </SidebarMenu>
                <SideBtn>
                <SideBtnLink to='/donate'>DONATE</SideBtnLink>
                </SideBtn>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
