import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const addToCart = () => {
    console.log('button clicked');
  }

  return (
    <div className='product-card-container'>
      <img alt={name} src={imageUrl} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button type='button' buttonType='inverted' onClick={addToCart}>Add To Cart</Button>
    </div>
   );
}

export default ProductCard;
