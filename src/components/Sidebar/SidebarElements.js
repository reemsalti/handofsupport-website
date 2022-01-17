import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #fff;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in;
visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
top: ${({ isOpen }) => (isOpen ? '-100' : '0')};
top: 0;
font-family: "ProximaNova";
font-weight: bolder;

`;

export const CloseIcon = styled(FaTimes)`
color: #000;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;


export const SidebarWrapper = styled.div`
color: #fff;
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`;

export const SidebarLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: hidden;
text-decoration: none;
color: #48544d;
cursor: pointer;


&:hover {
    color: #000;
    font-size: 1.8rem;
}
`;