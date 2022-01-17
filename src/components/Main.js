import './Main.css';
import React, {useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import 'react-router-dom';

import "./Navbar/index";


function Main() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <div className='container'>
                
            <div className='contents'>


                <div className='About' id='about'>
                    <h2>ABOUT US</h2>
                    <p></p>
                </div>
                <div className='Policy' id='policy'>
                    <h2>POLICY</h2>
                   <p></p>
                </div>
                <div className='Location' id='location'>
                    <h2>LOCATION</h2>
                   <p></p>
                </div>
                <div className='Contact' id='contact'>
                    <h2>CONTACT</h2>
                    <p></p>
                </div>
                </div>
            </div>
            <div className='footer-container'>
                <div className='bottomnav'>
                <a className="mininav" href='#about'>ABOUT</a>
                    <a className="mininav" href='#policy'>POLICY</a>
                    <a className="mininav" href='#location'>LOCATION</a>
                    <a className="mininav" href='#contact'>CONTACT</a>
                </div>
                
                <p className='copyright'> <strong>©</strong> 2022</p>
            </div>
        </>    
    )
}

export default Main
