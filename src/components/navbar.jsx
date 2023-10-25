import React from "react";
import "./navbar.css";
// import { useNavigate } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function Navbar() {
  // const navigate = useNavigate();
  return (
    <div>
      <header className="navbar">
        <div className="webName">
          <h2>Sekoi</h2>
        </div>
        <div className="linkButton">
          {/* <a href="/#" onClick={() => navigate("/")}>
            Home
          </a> */}
          <a href="/#">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="icon">
          <AiOutlineSearch size={30} />
          <AiOutlineHeart size={30} />
          <AiOutlineShoppingCart size={30} />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
