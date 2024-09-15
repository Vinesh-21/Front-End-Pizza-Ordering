import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm outline-none transition-all duration-300 placeholder:text-stone-400 focus:w-40 focus:ring focus:ring-yellow-400 focus:ring-offset-2 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
