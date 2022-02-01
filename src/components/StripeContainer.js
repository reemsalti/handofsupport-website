import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = 'pk_test_51KORY0LHk9W41AbIdbi0uELEsOuEDf4HoYvwbU6aAYnH90VoD730ulTTC0uCPyYyqB1VdHrjv0aN6wisNqx0XW9R00D4iOrshr'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
  <Elements stripe={stripeTestPromise}>
      <PaymentForm />
  </Elements>
  )
}
