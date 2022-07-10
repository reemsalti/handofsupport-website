import React from 'react';
import Cards from '../Cards/Cards';
import './Home.css';
// import img from "/Users/reem/handofsupport-website/src/images/rainboots.jpg";
import img from "../images/rainboots.jpg";


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
            <h2>SUPPORT OUR FUTURE</h2>
            <div className='panel1'>
            
            <p className='homedescription'>
Poverty can be found citywide, statewide, nationally and globally. 
Poverty can develop in the smallest or most unexpected locations — 
familiar places, not simply in distant third world countries separated 
from the cozy upper-middle-class Western lifestyle. 
This is a global issue that must be dealt with by the international community. 
Some efforts are being made to that effect, but not enough. 
            </p>
            <div className='factscontainer'>
                <div className='facts-left'>
                <div className='fact1'><p className='fact1p'><strong className='facth'>1 in 7</strong><br></br>of those using shelters in Canada are children.</p>
                </div>
                <div className='fact2'><p className='fact2p'>In 2016, more than <strong className='facth'>1/3</strong><br></br>of food bank users were children.</p>
                </div>
                
                </div>
                <div className='facts-right'>
                <div className='fact2'><p className='fact2p'><strong className='facth'>1 in 5</strong><br></br>children live in conditions of poverty in Canada, that is 1.3 million children. </p>
                </div>
                <div className='fact1'><p className='fact1p'><strong className='facth'>40%</strong><br></br>of Indigenous children in Canada live in poverty.</p>
                </div>
                </div>
                <p>Source: Statistics Canada </p>
            </div>
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