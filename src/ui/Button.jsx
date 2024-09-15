import { Link } from "react-router-dom";

function Button({ onClick, to, disabled = false, children, type = "primary" }) {
  // const className =
  //   "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase -tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase -tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "sm:px-6 sm:py-4 px-4 py-3",
    secondary:
      "inline-block rounded-full border-2 border-stone-200 font-semibold uppercase -tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-1 disabled:cursor-not-allowed sm:px-4 sm:py-2 px-2 py-1 hover:text-stone-800",
    small: base + "px-4 py-2 text-xs",

    round: base + "px-3 py-2 text-xs rounded-full ",
  };
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
