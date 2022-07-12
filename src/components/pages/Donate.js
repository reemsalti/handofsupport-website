import React, { useEffect, useState } from 'react';
// import StripeContainer from '../StripeContainer';
import './Donate.css';
import img from '../images/heartinhand.jpg';
import { Button } from 'react-scroll';

function Donate() {
  const [donateAmount, setDonateAmount] = useState('')
  const [donateLink, setDonateLink] = useState('')
  const [buttons, setButtons] = useState([
    { label: "$15", value: false },
    { label: "$25", value: false },
    { label: "$50", value: false },
    { label: "$75", value: false },
    { label: "$100", value: false },
    { label: "Custom", value: false }
  ]);

  useEffect(() => {
    console.log(donateLink)
    console.log(buttons)
    buttons.forEach((button) => {
      if (button.value) {
        setDonateAmount(button.label)
        if (button.label === '$15') setDonateLink('https://donate.stripe.com/bIY15p5RegjFeKk9AB')
        if (button.label === '$25') setDonateLink('https://donate.stripe.com/7sI01l93qgjF31C28d')
        if (button.label === '$50') setDonateLink('https://donate.stripe.com/fZe01l3J68RdeKk4gm')
        if (button.label === '$75') setDonateLink('https://donate.stripe.com/fZeeWf93q3wTgSsdQX')
        if (button.label === '$100') setDonateLink('https://donate.stripe.com/cN27tNgvSd7tcCc5ks')
        if (button.label === 'Custom') setDonateLink('https://donate.stripe.com/00g29tgvSebx31C8wA')
      }
    })
  },[buttons, donateLink])

  const handleButtonsChange = ({
    buttons,
    setButtons,
    handleButtonsChange
  }) => label => {
    const newButtonsState = buttons.map(button => {
      if (button.label === label) {
        return (button = { label: button.label, value: true });
      }
      return {
        label: button.label,
        value: false
      };
    });
    setButtons(newButtonsState);
  };

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
        <ButtonGroup {...{ buttons, setButtons, handleButtonsChange }} />
        </div>
        <div className='donationitemb'>
          <a className='itemlink' target='_blank' href={donateLink}>Donate</a>
        </div>
        </div>
          <h3 className='category-h'>GIVE MONTHLY</h3>
    </div>
  
  )
}

export default Donate;

const ButtonGroup = ({ buttons, setButtons, handleButtonsChange }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <button
          key={`${button.label}-${index}`}
          className={button.value === false ? 'donationitem' : 'donationitemselected'}
          onClick={() =>
            handleButtonsChange({ buttons, setButtons })(button.label)
          }
        >
          {button.label.toUpperCase()}
        </button>
      ))}
    </>
  );
};

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