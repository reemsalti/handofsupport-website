// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// import CheckoutForm from './CheckoutForm';

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe("pk_live_51KOljoJS4A7sxIb6kKtS5fjY5kmT8k9xNKR1TBVh5EYPxBXFPIkRDehkOYpm6Covi9uVSEnu5wh0f9uSkhxZgzQe002WSeNinQ");

// function App() {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));