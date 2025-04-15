// StripeWrapper.jsx
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51RCaVSQxwgJqaa5IBYajvsGiFrM49zW6Lm9h0jaSpYpeN7xeO7WMBmHmqA7tVz8K2xIGrYilTy4Sw46Q9wN9eMRU00wL5CowRm"); // Replace with your actual Stripe publishable key

const StripeWrapper = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeWrapper;
