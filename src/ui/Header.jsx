import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-500 p-4 uppercase tracking-widest sm:px-6">
      <Link to="/">Fast Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
