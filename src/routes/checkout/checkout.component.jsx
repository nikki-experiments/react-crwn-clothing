import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className='checkout-header'>
        <span className='header-block'>Product</span>
        <span className='header-block'>Description</span>
        <span className='header-block'>Quantity</span>
        <span className='header-block'>Price</span>
        <span className='header-block'>Remove</span>
      </div>
      {cartItems.map(item =>
        <CheckoutItem
          key={item.id}
          cartItem={item}
        />)}
        <span className='total'>Total: ${cartTotal}</span>
    </div>
   );
}

export default Checkout;
