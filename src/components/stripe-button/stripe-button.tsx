import { FC } from 'react';
import StripeCheckout from 'react-stripe-checkout';

interface IProps {
  price: number;
}

const StripeCheckoutButton: FC<IProps> = ({ price }) => {
  const onToken = (token: any) => {
    console.log(token);
    console.log(typeof token);

    alert('Payment Successful');
  };

  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KLu1kKLEfPvWZtmKZUdbaLJPJiLTfaiRSbNHn0w5ceMi0h54xnSJ136o8oDQiaheSJ77CCrk9lQaCYMWUm4x8bN00baCYVYcP';

  return (
    <StripeCheckout
      label="Pay Now"
      name="RE4CT Clothing Ltd."
      billingAddress={true}
      shippingAddress={true}
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
