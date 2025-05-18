import TopMenu from "../components/TopMenu";
import store from "../redux/store";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function add(product) {
    dispatch(addItem(product));
  }
  function sub(product) {
    dispatch(removeItem(product));
  }

  function priceCalc() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  }

  return (
    <>
    
        <TopMenu />

      <main>
        <h1>Shopping Cart</h1>
        <div className="cartItems">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} add={add} sub={sub} />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="cart-total">
          <p>Total: {priceCalc() + "$"}</p>
          <button>Checkout</button>
        </div>
      </main>
    </>
  );
}

export default Cart;
