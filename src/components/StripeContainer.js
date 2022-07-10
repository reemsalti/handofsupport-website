import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './PaymentForm';


const PUBLIC_KEY = 'pk_live_51KOljoJS4A7sxIb6kKtS5fjY5kmT8k9xNKR1TBVh5EYPxBXFPIkRDehkOYpm6Covi9uVSEnu5wh0f9uSkhxZgzQe002WSeNinQ'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
  <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
  </Elements>
  )
}
