import React, { useState } from 'react';
import StripeContainer from '../StripeContainer';

function Donate() {
  const [showItem, setShowItem] = useState(false)
  return (
  <div className='container'>
      <h1>DONATE</h1>
      {
      showItem ? <StripeContainer/> : 
      <>
      <h3>$10.00</h3>
      <button onClick={() => setShowItem(true)}>Donate</button>
      </>
      }
  </div>
  )
}

export default Donate;
