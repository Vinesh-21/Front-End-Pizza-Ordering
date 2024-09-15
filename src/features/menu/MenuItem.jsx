import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getPizzaQuantityByID } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  const PizzaQuantity = useSelector(getPizzaQuantityByID(id));

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="my-2 flex gap-4 py-2 text-sm">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex w-full flex-col pt-0.5">
        <p className="text-base font-semibold">{name}</p>
        <p className="text-sm capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <>
              <p className="text-sm">{formatCurrency(unitPrice)}</p>
              {!soldOut && (
                <>
                  {PizzaQuantity ? (
                    <div className="flex items-center gap-8">
                      <UpdateItemQuantity id={id}>
                        {PizzaQuantity}
                      </UpdateItemQuantity>
                      <DeleteItem pizzaId={id} />
                    </div>
                  ) : (
                    <Button onClick={() => handleAddToCart()} type="small">
                      Add to Cart
                    </Button>
                  )}
                </>
              )}
            </>
          ) : (
            <p className="text-sm font-medium uppercase">Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
