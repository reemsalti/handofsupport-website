// import React, { useState } from 'react';
// import StripeContainer from '../StripeContainer';
import './Donate.css';
import img from '../images/heartinhand.jpg';

function Donate() {
  
  return (
  <div className='donatecontainer'>
    <div className='overlay'>
            <img className='rainboots' src={img} alt=''/>
                
            </div>
            <div className='bg-image'>
              <div>
                
              </div>
            </div>
            <h2 className='Dh'>DONATE</h2>
     
     <p className='donate-p'>One simple way to make a difference and support our mission. 
      The best gift you can give today.
      </p>
      <h3 className='category-h'>GIVE ONE-TIME</h3>
      <div className='donationlistwrapper'>
      <div className='donationlist'>
        <div className='donationitem'>
          <a className='itemlink' href='https://donate.stripe.com/bIY15p5RegjFeKk9AB'>$15</a>
        </div>

        <div className='donationitem'>
          <a className='itemlink' href='https://donate.stripe.com/7sI01l93qgjF31C28d'>$25</a>
        </div>

        <div className='donationitem'>
          <a className='itemlink' href='https://donate.stripe.com/fZe01l3J68RdeKk4gm'>$50</a>
        </div>
        <div className='donationitem'>
          <a className='itemlink' href='https://donate.stripe.com/fZeeWf93q3wTgSsdQX'>$75</a>
        </div>
        <div className='donationitem'>
          <a className='itemlink' href='https://donate.stripe.com/cN27tNgvSd7tcCc5ks'>$100</a>
        </div>
      </div>
      
        <div className='donationitemb'>
            <a className='itemlink' href='https://donate.stripe.com/00g29tgvSebx31C8wA'>Custom Amount</a>
          </div>
      </div>
        <h3 className='category-h'>GIVE MONTHLY</h3>
        
  </div>
  
  )
}

export default Donate;

// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "../PaymentForm";
// import "./Donate.css";

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is your test publishable API key.
// const stripePromise = loadStripe("sk_test_51KORY0LHk9W41AbIW6cBOUa61QBoLRUJ06BKSZgdcZ4ioTZPYldbf18rvDVq7RLywyspOlqLIIMEd6ZCRgHISmG100hWsQsjwD");

// export default function Donate() {
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="App">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   );
// }

// import './Donate.css';
// import StripeContainer from '../StripeContainer';
// import { useState } from 'react';

// function Donate() {
//   const [showItem, setShowItem] = useState(false)
//   return (
//     <div className='Donate'>
//       <div className='donatecontainer'>
//         <h2>Donation</h2>
//           <div className='donationitem'>
//             {showItem ? <StripeContainer/> : <><h3>$10.00</h3><button className='itemlink' onClick={() => setShowItem(true)}>Donate</button></>}
//           </div>
//       </div>
//   </div>
//   );
// }

// export default Donate;