import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // stripe accept price in cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JErerDEIpBjt7NDlDRldryhuuqjLpvBVNPH0mDUZFLup8GD3ezyBQzBcyGnPWJ7AyQbnIQ0uc3SkNq8jmeGZJGZ00DwUCD77O";

  // token prop is the on success callback that triggers when we submit.
  // we dont have real backend processing so just log it.
  // in real life you pass this token to your backend that creates the charge.
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful.");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
