import { useContext } from 'react';

import Button from '../button/button.component';

import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img alt={name} src={imageUrl} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button type='button' buttonType='inverted' onClick={addProductToCart}>Add To Cart</Button>
    </div>
   );
}

export default ProductCard;
