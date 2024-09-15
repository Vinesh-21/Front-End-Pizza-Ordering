import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decItemQuantity, incItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ children, id }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => dispatch(decItemQuantity(id))} type="round">
        -
      </Button>
      {children}
      <Button onClick={() => dispatch(incItemQuantity(id))} type="round">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
