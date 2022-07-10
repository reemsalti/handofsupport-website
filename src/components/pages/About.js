import React from 'react';
import './About.css';
import img from '../images/childrenplayingdt.jpg';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='container'>
            <div className='overlay'>
            <img className='rainboots' src={img} alt=''/>
                <p className='quote'>
                    "The best way to find yourself is to lose yourself in the service of others." <br></br>- Mahatma Ghandi
                </p>
            </div>

            <h2 className='ourstory'>WHAT WE DO</h2>

            <div className='description-container'>
                <p className='aboutdescription'>
                HOS is a Non-Government Organization which works with communities to support children 
                in need of essentials such as food, clothing, school supplies, etc. 
                Together we have the power to eliminate hunger, poverty and leave a 
                better place for our future generations.
                 </p>
            <div className='btnwrapper'>
        <Link className='getinvolvedbtn' to='/getinvolved'>GET INVOLVED</Link>
    </div>

    <h2 className='philosophy'>OUR PHILOSOPHY</h2>
        <p className='aboutdescription'>
            The Hands of Support team will take any opportunity to help 
            anybody in need. We believe it is about the action, not the fruit of the action
            that is important. You have to do the right thing. 
            It may not be in your power, may not be in your time, 
            that there'll be any fruit. But that doesn't mean you stop
            doing the right thing. You may never know what results come 
            from your action. But if you do nothing, there will be no result.
            </p>
            </div>
        </div>
    )
}

export default About;
