import styles from './styles.module.css';
import Logo from '@assets/svg/cart.svg?react';

const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      {/* Basket icon */}
      <Logo title="basket icon" />
      
       {/* Badge showing the number of items in the basket */}
      <div className={basketQuantity}>3</div> 
    </div>
  );
}

export default HeaderBasket;
