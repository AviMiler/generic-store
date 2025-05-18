import styles from "../style/CartItem.module.css";

function CartItem({ item, add, sub }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemDetails}>
        <img src={item.product.image} alt={item.product.name} />
        <h3>{item.product.name}</h3>
        <p className={styles.price}>{item.product.price}$</p>
      </div>
      <button className={`${styles.quantityButton} ${styles.addButton}`} onClick={() => add(item.product)}>+</button>
      <p className={styles.quantity}>{item.quantity}</p>
      <button className={`${styles.quantityButton} ${styles.subButton}`} onClick={() => sub(item.product)}>-</button>
    </div>
  );
}

export default CartItem;
