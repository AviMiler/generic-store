import styles from "../style/Product.module.css";
import { useLocation } from "react-router-dom";
import TopMenu from "../components/TopMenu.js";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem, removeItem } from "../redux/cartSlice.js";
import store from "../redux/store";

function Product() {
  const product = useLocation().state?.product;
  const dispatch = useDispatch();

  async function addToCartHandler(product) {
    dispatch(addItem(product));
  }

  return (
    <>

        <TopMenu />
  
      <main>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <button
          onClick={() => {
            addToCartHandler(product);
          }}
        >
          Add to Cart
        </button>
      </main>
    </>
  );
}

export default Product;
