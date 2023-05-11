import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
  <>

    <nav className="navbar navbar-expand-lg  pt-3 pb-3   ">
      <div className="container">
        <Link className="navbar-brand logo fs-3" to="/">
          Shop_LoGo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 ">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">
                ShopLIst
              </Link>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            
            <button className="d-flex jusity-content-between align-items-center ms-2 cart">
              {/* <span className="cartCount">Cart items: {items.length}</span>{" "} */}
              <i className="bi bi-cart">{items.length}</i>
            </button>
          </form>
        </div>
      </div>
    </nav>

    




     </>
      );
};

export default Navbar;
