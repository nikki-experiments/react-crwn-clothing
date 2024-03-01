import { useContext } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CartContext } from "../../contexts/cart.context";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img alt={name} src={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
