import React from "react";
import { Modal, Button } from "react-bootstrap";

const CartModal = ({ show, handleClose, cart, deleteCart }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((each) => (
            <div
              key={each.id}
              className="d-flex mb-2"
              style={{ border: "1px solid black" }}
            >
              <div
                className="cartImage"
                style={{ backgroundImage: `url(${each.image})` }}
              ></div>
              <div className="cartDiv text-center">
                <h5 className="mt-3">{each.des}</h5>
                <h4 className="mt-2">{each.price}</h4>
              </div>
              <button
                className="btn btn-danger mr-2"
                onClick={() => deleteCart(each.id)}
                style={{ height: 35, marginTop: "auto", marginBottom: "auto" }}
              >
                Delete
              </button>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartModal;
