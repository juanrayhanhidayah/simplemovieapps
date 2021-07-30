import "./Cart.css";
import { useEffect, useState } from "react";
import React from "react";
import { Grid, Modal } from "@material-ui/core";
import { Badge, Button } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";

const Cart = () => {
  // const listingCart = () => {
  //   const dataCart = JSON.parse(localStorage.getItem("cart"));
  //   setMovieCart(dataCart);
  // };

  return (
    <div>
      <span className="pageTitle">Cart</span>
      {/* <Grid container spacing={4}>
        {movieCart.map((item) => {
          <Grid item lg={3} md={4} sm={2} key={item.id}>
            <div>
              <Badge
                badgeContent={item.vote_average}
                color={item.vote_average > 6 ? "primary" : "secondary"}
              />
              <img
                className="poster"
                src={
                  item.poster_path
                    ? `${img_300}${item.poster_path}`
                    : unavailable
                }
                alt={item.title}
                width="100%"
                // onClick={() => handleSelectMovie(id, media_type)}
                style={{ cursor: "pointer" }}
              />
              <div className="identity">
                <b className="title" style={{ color: "wheat" }}>
                  {item.title}
                  {item.name}
                </b>
                <b
                  className="price"
                  style={{ color: "green", alignContent: "right" }}
                >
                  | IDR.{item.price}
                </b>
              </div>
              <Button
                style={{ background: "#080e2c", color: "wheat" }}
                // onClick={() =>
                //   localStorage.setItem("cart", JSON.stringify(data))
                // }
              >
                Remove
              </Button> */}
      {/* <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span> */}
      {/* </div>
          </Grid>;
        })}
      </Grid> */}
    </div>
  );
};

export default Cart;
