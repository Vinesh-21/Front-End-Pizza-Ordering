import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { getTotalCartItems } from "../features/cart/cartSlice";

function AppLayout() {
  //To check wheather our page is curretly loading or ideal
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      {useSelector(getTotalCartItems) > 0 && <CartOverview />}
    </div>
  );
}

export default AppLayout;
