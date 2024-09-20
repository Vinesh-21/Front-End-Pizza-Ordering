import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="mt-4 font-semibold">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
