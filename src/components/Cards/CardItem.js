import React from 'react'
import { Link } from 'react-router-dom';



function CardItem(props) {
    return (
        <>
          <li className='carditem'>
              <Link className='carditemlink' to={props.path}>
                  <figure className='picwrap' data-category={props.label}>
                      <img 
                      src={props.src} 
                      alt= ''
                      className='carditemIMG' 
                      />
                  </figure>
                  <div className='carditeminfo'>
                      <h4 className='cardtitle'>{props.h4}</h4>
                      <p className='carditemtext'>{props.text}</p>
                      <h6 className='date'>{props.date}</h6>
                      
                  </div>
              </Link>
          </li>
        </>
    );
}

export default CardItem;