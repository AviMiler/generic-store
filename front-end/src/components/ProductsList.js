import { Link } from "react-router-dom";
import styles from "../style/ProductsList.module.css";

function ProductsList({ products }) {
  return (
    <div className={styles.productsList}>
      {products.map((product) => (
        <Link
          key={product.id}
          className={styles.productItem}
          to={`product/${product.name}`}
          relative="path"
          state={{ product }}
        >
          {product.name}
        </Link>
      ))}
    </div>
  );
}

export default ProductsList;
