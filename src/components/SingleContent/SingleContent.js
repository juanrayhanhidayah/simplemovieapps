import React from "react";
import { Badge, Button } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import { useState, useEffect, useContext } from "react";
import "./SingleContent.css";

const SingleContent = ({ data, handleSelectMovie, cart, setCart }) => {
  const { id, poster_path, title, name, media_type, vote_average } = data;
  let price;
  if (vote_average <= 5) {
    price = 5000;
  } else {
    price = 7500;
  }
  const movie = {
    id: id,
    poster_path: poster_path,
    title: title,
    name: name,
    price: price,
    vote_average: vote_average,
  };
  // const [cart, setCart] = useState([]);
  // const handleCartUpdate = () => {
  //   setCart([...cart, movie]);
  //   handleSaveLocalStorage();
  //   // console.log(cart.length());
  // };
  // const handleSaveLocalStorage = () => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  const addToCart = () => {
    setCart([...cart, movie]);
    console.log(cart);
  };
  //{
  // let newCart = [...cart];
  // let itemInCart = newCart.find((item) => movie.id === item.id);
  // itemInCart = { ...movie };
  // newCart.push(itemInCart);

  // setCart(newCart);
  // console.log(cart);
  // };

  return (
    <div>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster_path ? `${img_300}${poster_path}` : unavailable}
        alt={title}
        width="100%"
        onClick={() => handleSelectMovie(id, media_type)}
        style={{ cursor: "pointer" }}
      />
      <div className="identity">
        <b className="title" style={{ color: "wheat" }}>
          {title}
          {name}
        </b>
        <b className="price" style={{ color: "green", alignContent: "right" }}>
          | IDR.{price}
        </b>
      </div>
      <Button
        style={{ background: "#080e2c", color: "wheat" }}
        onClick={() => addToCart()}
      >
        Add to Cart
      </Button>
      {/* <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span> */}
    </div>
  );
};

export default SingleContent;
