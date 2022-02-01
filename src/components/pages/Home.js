import React from 'react';
import Cards from '../Cards/Cards';
import './Home.css';
// import img from "/Users/reem/handofsupport-website/src/images/rainboots.jpg";
import img from "/Users/reem/handofsupport-website/src/components/images/handsin.jpg";


function Home() {
    return (
        <>
        {/* <img className='mbsize' src={img} alt=''/> */}
        <div className='container'>
        <div className='overlay'>
            <img className='rainboots' src={img} alt=''/>
                {/* <p className='quote'>
                    Hands of Support
                </p> */}
            </div>
            {/* <h1>WELCOME</h1> */}
            <div className='panel1'>
            <h2>Support Our Future</h2>
            <p className='homedescription'>
Poverty can be found citywide, statewide, nationally and globally. 
Poverty can develop in the smallest or most unexpected locations — 
familiar places, not simply in distant third world countries separated 
from the cozy upper-middle-class Western lifestyle. 
This is a global issue that must be dealt with by the international community. 
Some efforts are being made to that effect, but not enough. 
            </p>
            </div>
            <div className='homecards'>
                <h2>Our Blog</h2>
            <Cards /> 
            </div>
        </div>
        </>
    )
};

export default Home;