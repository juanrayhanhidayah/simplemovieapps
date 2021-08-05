import "./Cart.css";
import { useEffect, useState } from "react";
import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CartItem from "../../components/CartItem/CartItem";
import DeleteIcon from "@material-ui/icons/Delete";
const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem("cart"));
  //   if (cart) {
  //     setCart(cart);
  //   }
  // }, [cart]);
  // console.log(itemCart);
  let subTotal = cart.reduce(function (acc, curr) {
    return acc + curr.price;
  }, 0);
  const removeItem = (id, e) => {
    let index = cart.findIndex((item) => item.id === id);
    cart.splice(index, 1);
    setCart([...cart]);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    // window.location.reload();
  };
  const handleAddQty = (id) => {
    const exist = cart.find((x) => x.id === id);
    // console.log(exist);
    let existPrice;
    if (exist.vote_average <= 5) {
      existPrice = 5000;
    } else {
      existPrice = 7500;
    }
    if (exist) {
      const updated = cart.map((item) =>
        item.id === id
          ? { ...exist, qty: exist.qty + 1, price: item.price + existPrice }
          : item
      );
      console.log(updated);
      setCart(updated);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const handleSubstractQty = (id) => {
    const exist = cart.find((x) => x.id === id);
    let existPrice;
    if (exist.vote_average <= 5) {
      existPrice = 5000;
    } else {
      existPrice = 7500;
    }

    if (exist.qty === 0) {
      removeItem(id);
    }
    // console.log(exist);
    if (exist) {
      const updated = cart.map((item) =>
        item.id === id
          ? { ...exist, qty: exist.qty - 1, price: item.price - existPrice }
          : item
      );
      console.log(updated);
      setCart(updated);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  return (
    <div>
      <span className="pageTitle">Cart</span>
      <Grid container spacing={4}>
        {cart.map((val, idx) => (
          <Grid item lg={3} md={4} sm={2} key={idx}>
            <CartItem data={val} />
            <div className="btnAction">
              <Button
                className="btnRemove"
                onClick={(e) => removeItem(val.id, e)}
              >
                <DeleteIcon />
              </Button>
              <div className="addition">
                <button className="btnAdd" onClick={() => handleAddQty(val.id)}>
                  +
                </button>
                <h3>{val.qty}</h3>
                <button
                  className="btnMin"
                  onClick={() => handleSubstractQty(val.id)}
                >
                  -
                </button>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <h3 className="subTotal">Subtotal: IDR.{subTotal}</h3>
    </div>
  );
};

export default Cart;
