import React from "react";

const Navbar = ({ setPage, cartCount }) => {
  return (
    <nav className="navbar">
      <h1 onClick={() => setPage("welcome")} className="brand">
        Kart-Shipping{" "}
      </h1>
      <div className="nav-links">
        {/* <button onClick={() => setPage("welcome")}>Home</button> */}
        <button onClick={() => setPage("cart")}>Cart ({cartCount})</button>
      </div>
    </nav>
  );
};

export default Navbar;
