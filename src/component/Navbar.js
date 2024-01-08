import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function BasicExample() {
  const cartItems = useSelector((state) => state.cart.items);


  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand href="#home">Redux-Learning</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Link to="/">
            <button className="btn btn-light">Home</button>
          </Link>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Link to="/cart">
            <button className="btn btn-success">Cart {cartItems.length}</button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
