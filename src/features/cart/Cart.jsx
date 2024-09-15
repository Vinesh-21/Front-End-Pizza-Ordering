import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const username = useSelector(getUsername);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      {cart.length > 0 ? (
        <>
          <h2 className="mt-7 text-xl font-semibold uppercase">
            Your cart, {username}
          </h2>

          <ul className="mt-4 divide-y divide-stone-200 border-b">
            {cart.map((cartItem) => {
              console.log(cartItem);
              return <CartItem key={cartItem.id} item={cartItem} />;
            })}
          </ul>

          <div className="mt-5 space-x-2">
            <Button to="/order/new" type="primary">
              Order pizzas
            </Button>

            <Button type="secondary" onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
