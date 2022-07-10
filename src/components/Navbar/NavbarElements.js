import styled from "styled-components";
import { Link as LinkS }  from 'react-router-dom';
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkD } from 'react-router-dom'

export const Nav = styled.nav`
background: rgb(72, 135, 187);
height: 80px;
width: 100%;
display: block;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
margin: auto;
top: 0;
left: 0;
z-index: 10;
overflow: hidden;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%

max-width: 1100px;
`



export const Logo = styled(LinkR)`
height: 80px;
z-index: 999;
color: #fff;
cursor: pointer;
font-size: 1.8rem;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;
margin-left: 22px;
font-family: 'ProximaNova';


@media screen and (max-width: 460px) {
    height: 80px;
}
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-decoration: none;
text-align: center;


@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
color: #fff;
padding: 0.6rem;
cursor: pointer;
font-size: 1rem;
align-items: center;
font-weight: bold;
text-align: center;
display: flex;


`
export const NavLinks = styled(LinkS)`
text-decoration: none;
color: #fff;
cursor: pointer;
font-size: 1rem;
display: flex;
align-items: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
font-weight: 400;
margin: auto;
justify-self: flex-end;

@media screen and (max-width: 460px) {
    font-size: 0.8rem;
}
`

export const NavBtn = styled.nav`



@media screen and (max-width: 760px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 10px;
background: #fff;
align-items: center;
white-space: nowrap;
padding: 10px 22px;
color: #000;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 700;

&:hover {
    transition: all 0.2s ease-in-out;
    font-size: 17px;
    background: #fff;
    color: #000;
}
`

