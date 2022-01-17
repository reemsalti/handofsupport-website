import styled from "styled-components";


export const Nav = styled.nav`
background: rgb(238, 241, 236);
height: 80px;
width: 100%;
display: block;
align-items: center;
font-size: 1rem;
position: sticky;
margin: auto;
top: 0;
left: 0;
z-index: 10;
overflow: hidden;
// box-shadow: 2px 2px 40px #5B6D59;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between !important;
height: 80px;
z-index: 1;
width: 100%
padding: 0 2px;

`

export const Logo = styled.img`
height: 70px;
z-index: 999;
margin-top: 8px;
color: #fff;
cursor: pointer;
font-size: 1.8rem;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;
margin-left: 24px;
image-rendering: -webkit-optimize-contrast;


@media screen and (max-width: 460px) {
    height: 60px;
    
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
    color: #000;
   
}
`

export const NavMenu = styled.ul`
justify-content: right !important;
display: flex;
align-items: center;
list-style: none;
text-decoration: none;
color: #fff;
text-align: right;

@media screen and (max-width: 768px) {
    display: none;
    
}
`

export const NavItem = styled.li`
color: #fff;
padding: 24px;
cursor: pointer;
font-size: 1rem;
display: flex;
align-items: center;
font-weight: bold;


`
export const Link = styled(Link)`
text-decoration: none !important;
color: #686860;
cursor: pointer;
font-size: 1.1rem;
display: flex;
align-items: center;
margin: auto;
font-weight: bolder;
font-family: "ProximaNova";


@media screen and (max-width: 460px) {
    font-size: 0.8rem;
    
}
`

