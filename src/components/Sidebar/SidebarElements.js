import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS }  from 'react-router-dom';
// import { Link as LinkR } from 'react-scroll';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: rgb(72, 135, 187);
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in;
visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
top: ${({ isOpen }) => (isOpen ? '-100' : '0')};
top: 0;
font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;;
font-weight: 500;


`;

export const CloseIcon = styled(FaTimes)`
color: #fff;

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
grid-template-rows: repeat(6, 60px);
text-align: center;
padding: 0;
margin: 0;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`;

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.2rem;
text-decoration: none;
list-style: none;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {
    color: #000;
    font-size: 1.8rem;
}
`;

export const SideBtn = styled.div`
display: flex;
align-items: center;
font-weight: bolder;
justify-content: center;
text-align: center;

`

export const SideBtnLink = styled(LinkS)`
border-radius: 9px;
background: #fff;
align-items: center; 
padding: 11px 15px;
color: #000;
font-size: 1.2rem;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-weight: 600;

&:hover {
    transition: all 0.2s ease-in-out;
    font-size: 1.4rem;
    background: #000;
    color: #fff;
}
`