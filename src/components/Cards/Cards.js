import React from "react";
import CardItem from "./CardItem";
import './Cards.css';
import boots from '../images/rainboots.jpg';
  


function Cards() {
    return (
        <div className='cards'>
            {/* <h1>Check these out!</h1> */}
            
                <div className='cardswrapper'>
                    <ul className='cardlist'>
                        <CardItem
                             src={boots}
                             h4='title'
                            text='this is the blog preview text which is supposed to stay within the margins, this is a test to see if it stays in the margins'
                            date='1/13/2022'
                            path=''
                        />
                        <CardItem
                             src={boots}
                             h4='title'
                            text='this is the blog preview text which is supposed to stay within the margins, this is a test to see if it stays in the margins'
                            date='1/13/2022'
                            path=''
                        />
                        <CardItem
                             src={boots}
                             h4='title'
                            text='this is the blog preview text which is supposed to stay within the margins, this is a test to see if it stays in the margins'
                            date='1/13/2022'
                            path=''
                        />
                        <CardItem
                             src={boots}
                             h4='title'
                            text='this is the blog preview text which is supposed to stay within the margins, this is a test to see if it stays in the margins'
                            date='1/13/2022'
                            path=''
                        />
                        <CardItem
                        src={boots}
                        h4='title'
                       text='this is the blog preview text which is supposed to stay within the margins, this is a test to see if it stays in the margins'
                       date='1/13/2022'
                       path=''
                   />
                   <CardItem
                        src={boots}
                        h4='title'
                       text='this is the blog preview text which is supposed to stay within the margins, this is a test to see if it stays in the margins'
                       date='1/13/2022'
                       path=''
                   />
                    </ul>
                </div>
            
        </div>
    );
}

export default Cards;
