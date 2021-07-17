import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51JEHEHFb4UehHo8dqzXEST9tfteWx9Na0xTJh32hVEqZAa8K4IAQsvGruGy9y3a8klipm1dLgJuKY9tzhDTKl6so00KfQf9Qnt";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
