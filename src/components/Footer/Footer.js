import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
  <div className='footer-container'>
<div className='footerNav'>
    <Link className='navitem' to='/about'>OUR STORY</Link>
    <Link className='navitem' to='/blog'>BLOG</Link>
    <Link className='navitem' to='/getinvolved'>GET INVOLVED</Link>
    <Link className='navitem' to='/contact'>CONTACT</Link>
    
</div>

<div className='btnwrapper'>
        <Link className='footerbtn' to='/donate'>DONATE</Link>
    </div>
    
<div className='footerLogoSection'>
<h1 className='footerLogo'>HOS</h1>
<p className='CR'>Hands of Support © 2022</p>
</div>
  </div>
  )
}

export default Footer;
