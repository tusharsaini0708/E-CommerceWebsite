import React, { useState } from "react";
import Modal from "./modal";
const Navbar = ({ cart, deleteCart }) => {
  let [toggle, setToggle] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleToggle = () => {
    const temp = toggle === "show" ? "" : "show";

    setToggle(temp);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark py-0 fixed-top">
        <a className="navbar-brand">
          <i className=" mr-2 fab fa-shopify" style={{ color: "white" }}></i>
          ShopCart
        </a>
        <button className="navbar-toggler" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse   justify-content-end ${toggle}`}
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link cool-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link cool-link"
                href="#"
                onClick={() => window.scrollTo(0, 1500)}
              >
                About Us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn nav-link cool-link" onClick={handleShow}>
                <span style={{ fontSize: 20, color: "white" }}>Cart</span>
                <i
                  className="fas fa-cart-arrow-down fa-xl"
                  style={{ color: "white" }}
                ></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Modal
        show={show}
        handleClose={handleClose}
        cart={cart}
        deleteCart={deleteCart}
      />
    </div>
  );
};

export default Navbar;
